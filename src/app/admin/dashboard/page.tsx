'use client';

import { useState } from 'react';
import ProtectedRoute from "../../components/ProtectedRoute";

export default function DashboardPage() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productName,
          price: parseFloat(productPrice),
          description: productDescription,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('商品が正常に追加されました！');
        setProductName('');
        setProductPrice('');
        setProductDescription('');
      } else {
        setMessage(`商品の追加に失敗しました: ${data.message}`);
      }
    } catch (error) {
      setMessage('ネットワークエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute requiredGroup="admin">
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>管理者ダッシュボード</h1>
      <p>ここから新しい商品を追加できます。</p>

      {message && <p style={{ color: message.includes('成功') ? 'green' : 'red' }}>{message}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          商品名:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </label>
        <label>
          価格:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </label>
        <label>
          商品説明:
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }}
          />
        </label>
        <button type="submit" disabled={loading} style={{ padding: '0.75rem', cursor: 'pointer' }}>
          {loading ? '追加中...' : '商品を追加'}
        </button>
      </form>
    </div>
    </ProtectedRoute>
  );
}