"use client";

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

// 型定義エイリアス (最終スキーマに合わせて単数形を使用)
type Category = Schema['Category']['type'];

export default function EditCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // 編集中のカテゴリIDと、その新しい名前を管理
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

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

  // 「編集」ボタンが押された時の処理
  const handleEditClick = (category: Category) => {
    setEditingCategoryId(category.id);
    setEditingName(category.name);
  };

  // 「保存」ボタンが押された時の処理
  const handleSaveClick = async (categoryId: string) => {
    if (!editingName) {
      alert('カテゴリ名を入力してください。');
      return;
    }

    try {
      // client.models.Category.update() (単数形) を使って更新
      const { data: updatedCategory } = await client.models.Category.update({
        id: categoryId,
        name: editingName,
      });

      if (updatedCategory) {
        // 画面上のリストも更新
        setCategories(currentCategories => 
          currentCategories.map(c => c.id === categoryId ? updatedCategory : c)
        );
      }
      
      // 編集モードを終了
      setEditingCategoryId(null);
      setEditingName('');

    } catch (error) {
      console.error("カテゴリの更新に失敗しました:", error);
      alert("更新に失敗しました。");
    }
  };

  // 「キャンセル」ボタンが押された時の処理
  const handleCancelClick = () => {
    setEditingCategoryId(null);
    setEditingName('');
  };

  if (isLoading) {
    return <div>カテゴリリストを読み込み中...</div>;
  }

  return (
    <div>
      <h2>カテゴリ編集</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>カテゴリ名</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', width: '180px' }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {editingCategoryId === category.id ? (
                  // 編集モードの場合、入力フィールドを表示
                  <input 
                    type="text" 
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                  />
                ) : (
                  // 通常モードの場合、カテゴリ名を表示
                  category.name
                )}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
                {editingCategoryId === category.id ? (
                  // 編集モードの場合、「保存」「キャンセル」ボタンを表示
                  <>
                    <button onClick={() => handleSaveClick(category.id)}>保存</button>
                    <button onClick={handleCancelClick} style={{marginLeft: '8px'}}>キャンセル</button>
                  </>
                ) : (
                  // 通常モードの場合、「編集」ボタンを表示
                  <button onClick={() => handleEditClick(category)}>編集</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}