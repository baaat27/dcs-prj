// components/ProductRegistrationForm.tsx
"use client";

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { uploadData } from 'aws-amplify/storage';
import type { Schema } from '../../../amplify/data/resource';

// Amplifyクライアントを生成
const client = generateClient<Schema>();

// 型定義をエイリアスとして宣言
type Category = Schema['Category']['type'];

export default function ProductRegistrationForm() {
  // フォームの各入力値を管理するState
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  
  // カテゴリ関連のState
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<Set<string>>(new Set());

  // フォーム送信中の状態を管理するState
  const [isSubmitting, setIsSubmitting] = useState(false);

  // コンポーネントの初回読み込み時に、登録済みの全カテゴリを取得
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: Category } = await client.models.Category.list(); 
        setAllCategories(Category);
      } catch (error) {
        console.error("カテゴリの取得に失敗しました:", error);
      }
    };
    fetchCategories();
  }, []);

  // ファイル選択のイベントハンドラ
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // カテゴリのチェックボックスが変更された時のイベントハンドラ
  const handleCategoryChange = (categoryId: string) => {
    const newSelectedIds = new Set(selectedCategoryIds);
    if (newSelectedIds.has(categoryId)) {
      newSelectedIds.delete(categoryId);
    } else {
      newSelectedIds.add(categoryId);
    }
    setSelectedCategoryIds(newSelectedIds);
  };

  // フォーム送信時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || !file || selectedCategoryIds.size === 0) {
      alert('商品名、商品画像、最低1つのカテゴリは必須です。');
      return;
    }
    setIsSubmitting(true);

    try {
      // 1. 画像をS3にアップロード
      const uploadResult = await uploadData({
        path: `images/${Date.now()}-${file.name}`,
        data: file,
      }).result;
      const imageKey = uploadResult.path;

      // 2. 商品情報をDynamoDBに登録 (モデル名は複数形の'Products'を使用)
      const { data: newProduct } = await client.models.Product.create({
        name: productName,
        price: price,
        description: description,
        imageKey: imageKey,
      });

      if (!newProduct) throw new Error("商品の作成に失敗しました。");

      // 3. 商品と選択されたカテゴリを中間テーブルで紐付け
      await Promise.all(
        Array.from(selectedCategoryIds).map(categoryId =>
          client.models.ProductCategory.create({
            productId: newProduct.id,
            categoryId: categoryId,
          })
        )
      );
      
      alert(`商品「${newProduct.name}」を登録しました！`);
      
      // フォームをリセット
      setProductName('');
      setPrice(0);
      setDescription('');
      setFile(null);
      setSelectedCategoryIds(new Set());
      (e.target as HTMLFormElement).reset();

    } catch (error) {
      console.error('登録エラー:', error);
      alert('エラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px' }}>
      <h2>商品登録</h2>
      <div>
        <label>商品名:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
      </div>
      <div>
        <label>価格:</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
      </div>
      <div>
        <label>商品説明:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>商品画像:</label>
        <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} required />
      </div>
      <div>
        <label>カテゴリ（複数選択可）:</label>
        <div style={{ maxHeight: '150px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
          {allCategories.map(category => (
            <div key={category.id}>
              <input
                type="checkbox"
                id={category.id}
                checked={selectedCategoryIds.has(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              <label htmlFor={category.id}>{category.name}</label>
            </div>
          ))}
        </div>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '登録中...' : '商品を登録する'}
      </button>
    </form>
  );
}