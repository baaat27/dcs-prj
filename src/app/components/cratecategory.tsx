"use client";
import { useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import { data, type Schema } from '../../../amplify/data/resource';

// Amplifyクライアントを生成
const client = generateClient<Schema>();

export default function CreateCategoryForm() {
  const [categoryName, setCategoryName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryName) {
      setError('カテゴリ名を入力してください。');
      return;
    }
    setIsSubmitting(true);
    setError(null);

    try {
      // client.models.Categories.create() を使って新しいカテゴリを作成
      const { data: newCategory, errors } = await client.models.Categories.create({
        name: categoryName,
      });
      console.log("デバッグ: client.models の内容クリエイト:", client.models);
      if (errors) {
        throw new Error(errors.map(e => e.message).join('\n'));
      }

      if (newCategory) {
        alert(`カテゴリ「${newCategory.name}」を新しく追加しました！`);
        setCategoryName(''); // フォームをリセット
      } else {
        // このケースは稀ですが、念のためハンドルします
        setError('カテゴリの作成リクエストは成功しましたが、応答が空でした。');
      }

    } catch (err) {
      console.error('カテゴリ作成エラー:', err);
      setError('カテゴリの作成に失敗しました。同じ名前が既に存在する可能性があります。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h3>新しいカテゴリを追加</h3>
      <div>
        <label htmlFor="categoryName">カテゴリ名:</label>
        <input
          id="categoryName"
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '追加中...' : 'カテゴリを追加'}
      </button>
    </form>
  );
}