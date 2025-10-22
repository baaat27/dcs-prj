"use client";

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

// 型定義エイリアス (モデル名は単数形)
type Category = Schema['Category']['type'];

export default function DeleteCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState<string | null>(null); // 削除中のカテゴリIDを管理

  // カテゴリリストを取得する関数
  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      // client.models.Category (単数形) を使用
      const { data: items } = await client.models.Category.list();
      setCategories(items);
    } catch (error) {
      console.error("カテゴリの取得に失敗しました:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 最初にカテゴリリストを読み込む
  useEffect(() => {
    fetchCategories();
  }, []);

  // 削除ボタンが押された時の処理
  const handleDeleteCategory = async (categoryToDelete: Category) => {
    if (!window.confirm(`本当に「${categoryToDelete.name}」を削除しますか？`)) {
      return;
    }

    setIsDeleting(categoryToDelete.id);

    try {
      // 1. このカテゴリが商品に紐付いていないかチェックする
      // client.models.ProductCategory (単数形) を使用
      const { data: linkedProducts } = await client.models.ProductCategory.list({
        filter: { categoryId: { eq: categoryToDelete.id } }
      });

      // 2. もし紐付いている商品が1つでもあれば、エラーを表示して処理を中断
      if (linkedProducts.length > 0) {
        alert(`カテゴリ「${categoryToDelete.name}」は ${linkedProducts.length} 個の商品で使用されているため、削除できません。`);
        setIsDeleting(null);
        return;
      }

      // 3. 紐付いている商品がなければ、カテゴリを削除
      // client.models.Category (単数形) を使用
      await client.models.Category.delete({ id: categoryToDelete.id });

      alert(`カテゴリ「${categoryToDelete.name}」を削除しました。`);
      
      // 画面のリストから削除したカテゴリを消す
      setCategories(currentCategories => currentCategories.filter(c => c.id !== categoryToDelete.id));

    } catch (error) {
      console.error('削除処理中にエラーが発生しました:', error);
      alert('削除に失敗しました。');
    } finally {
      setIsDeleting(null);
    }
  };

  if (isLoading) {
    return <div>カテゴリリストを読み込み中...</div>;
  }

  return (
    <div>
      <h2>カテゴリ削除</h2>
      <p>※商品に紐付いているカテゴリは削除できません。</p>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>カテゴリ名</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', width: '100px' }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{category.name}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button
                  onClick={() => handleDeleteCategory(category)}
                  disabled={isDeleting === category.id}
                >
                  {isDeleting === category.id ? '削除中...' : '削除'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}