"use client";

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { remove } from 'aws-amplify/storage'; // S3からファイルを削除する関数
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

// 型定義エイリアス（amplify_outputs.jsonに合わせて複数形を使用）
type Product = Schema['Product']['type'];

export default function DeleteProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState<string | null>(null); // 削除中の商品IDを管理

  // 商品リストを取得する関数
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const { data: items } = await client.models.Product.list();
      setProducts(items);
    } catch (error) {
      console.error("商品の取得に失敗しました:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 最初に商品リストを読み込む
  useEffect(() => {
    fetchProducts();
  }, []);

  // 削除ボタンが押された時の処理
  const handleDeleteProduct = async (productToDelete: Product) => {
    // 誤操作防止の確認ダイアログ
    if (!window.confirm(`本当に「${productToDelete.name}」を削除しますか？`)) {
      return;
    }

    setIsDeleting(productToDelete.id); // 削除処理中の状態にする

    try {
      // 1. S3から関連画像を削除 (imageKeyがあれば)
      if (productToDelete.imageKey) {
        await remove({ path: productToDelete.imageKey });
        console.log('S3から画像を削除しました:', productToDelete.imageKey);
      }

      // 2. この商品に関連する「紐付けデータ」を全て削除
      const { data: relatedCategories } = await client.models.ProductCategory.list({
        filter: { productId: { eq: productToDelete.id } }
      });
      await Promise.all(
        relatedCategories.map(relation => client.models.ProductCategory.delete({ id: relation.id }))
      );
      console.log('商品とカテゴリの紐付けを削除しました。');

      // 3. 最後に商品本体を削除
      await client.models.Product.delete({ id: productToDelete.id });
      console.log('商品を削除しました:', productToDelete.name);

      alert('商品を削除しました。');
      
      // 画面のリストから削除した商品を消す
      setProducts(currentProducts => currentProducts.filter(p => p.id !== productToDelete.id));

    } catch (error) {
      console.error('削除処理中にエラーが発生しました:', error);
      alert('削除に失敗しました。');
    } finally {
      setIsDeleting(null); // 削除処理完了
    }
  };

  if (isLoading) {
    return <div>商品リストを読み込み中...</div>;
  }

  return (
    <div>
      <h2>商品削除</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>商品名</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', width: '100px' }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.name}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button
                  onClick={() => handleDeleteProduct(product)}
                  disabled={isDeleting === product.id} // 削除中はボタンを無効化
                >
                  {isDeleting === product.id ? '削除中...' : '削除'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}