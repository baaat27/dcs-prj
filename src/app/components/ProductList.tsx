"use client";

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import ProductImage from './ProductImage'; 
import { useCart } from '../context/CartContext'; 

const client = generateClient<Schema>();

// 型定義エイリアス（スキーマ定義に合わせて複数形を使用）
type Product = Schema['Product']['type'];

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // client.models.Products (複数形) を使用
        const { data: items } = await client.models.Product.list();
        setProducts(items);
      } catch (error) {
        console.error("商品データの取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>商品を読み込んでいます...</div>;
  }

  if (products.length === 0) {
    return <div>登録されている商品がありません。</div>;
  }

  return (
    <div>
      <h2>商品一覧</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <ProductImage imageKey={product.imageKey} />
            <div style={{ padding: '12px 16px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>{product.name}</h3>
              <p style={{ margin: 0, color: '#333', fontSize: '1rem', fontWeight: 'bold' }}>
                {product.price ? `${product.price.toLocaleString()} 円` : '価格未設定'}
                <button onClick={() => addToCart(product.id, 1)}>カートに追加</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}