"use client";

import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import { useCart } from '../context/CartContext'; // CartContextからuseCartフックをインポート
import ProductImage from '../components/ProductImage'; // ProductImageコンポーネントを再利用
import type { Schema } from '@/amplify/data/resource';
import Link from 'next/link';

const client = generateClient<Schema>();

// 型定義エイリアス (スキーマ定義に合わせて単数形を使用)
type CartItem = Schema['CartItem']['type'];
type Product = Schema['Product']['type'];

/**
 * カートアイテム一行分の情報を表示するサブコンポーネント
 * CartItemオブジェクトを受け取り、関連する商品情報を非同期で読み込む
 */
function CartItemRow({ item }: { item: CartItem }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [productLoading, setProductLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setProductLoading(true);
      try {
        // CartItemのproductプロパティはLazyLoader関数なので、呼び出して待つ
        const productResult = await item.product();
        if (productResult.data) {
          setProduct(productResult.data);
        } else {
          console.error(`商品ID ${item.productId} の商品が見つかりません。`);
        }
      } catch (error) {
        console.error("商品情報の取得に失敗:", error);
      } finally {
        setProductLoading(false);
      }
    };
    fetchProduct();
  }, [item]); // itemが変わるたびに商品情報を再取得

  if (productLoading || !product) {
    return (
      <tr>
        <td colSpan={5} style={{ padding: '16px', textAlign: 'center' }}>商品情報を読み込み中...</td>
      </tr>
    );
  }

  const itemSubtotal = (product.price || 0) * item.quantity;

  return (
    <tr style={{ borderBottom: '1px solid #eee' }}>
      <td style={{ padding: '16px', display: 'flex', alignItems: 'center' }}>
        <ProductImage imageKey={product.imageKey} />
        <Link href={`/products/${product.id}`} style={{ marginLeft: '16px', textDecoration: 'none', color: '#007bff' }}>
          {product.name}
        </Link>
      </td>
      <td style={{ padding: '16px', textAlign: 'right' }}>{product.price?.toLocaleString()} 円</td>
      <td style={{ padding: '16px', textAlign: 'center' }}>{item.quantity}</td>
      <td style={{ padding: '16px', textAlign: 'right' }}>{itemSubtotal.toLocaleString()} 円</td>
      <td style={{ padding: '16px', textAlign: 'center' }}>
        {/* TODO: 削除ボタンの実装 */}
        <button style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>削除</button>
      </td>
    </tr>
  );
}

/**
 * カートページ本体
 */
export default function CartPage() {
  const { items, itemCount, isLoading: isCartLoading } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCalculatingTotal, setIsCalculatingTotal] = useState(true);

  // カートアイテムの合計金額を計算する処理
  useEffect(() => {
    const calculateTotal = async () => {
      setIsCalculatingTotal(true);
      let total = 0;
      // Promise.allで、すべての商品の価格取得を並行して待つ
      await Promise.all(items.map(async (item) => {
        try {
          const productResult = await item.product();
          if (productResult.data) {
            total += (productResult.data.price || 0) * item.quantity;
          }
        } catch (error) {
          console.error("合計金額の計算中にエラー:", error);
        }
      }));
      setTotalPrice(total);
      setIsCalculatingTotal(false);
    };

    if (!isCartLoading && items.length > 0) {
      calculateTotal();
    } else if (!isCartLoading && items.length === 0) {
        setTotalPrice(0);
        setIsCalculatingTotal(false);
    }
  }, [items, isCartLoading]); // カートアイテムが変わるたびに再計算

  if (isCartLoading) {
    return <div style={{ padding: '2rem' }}>カートを読み込み中...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ショッピングカート</h1>
      {itemCount > 0 ? (
        <>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ccc' }}>
                <th style={{ padding: '8px 16px', textAlign: 'left' }}>商品</th>
                <th style={{ padding: '8px 16px', textAlign: 'right' }}>単価</th>
                <th style={{ padding: '8px 16px', textAlign: 'center' }}>数量</th>
                <th style={{ padding: '8px 16px', textAlign: 'right' }}>小計</th>
                <th style={{ padding: '8px 16px', textAlign: 'center' }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => <CartItemRow key={item.id} item={item} />)}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} style={{ padding: '16px', textAlign: 'right', fontWeight: 'bold' }}>合計金額:</td>
                <td style={{ padding: '16px', textAlign: 'right', fontWeight: 'bold' }}>
                  {isCalculatingTotal ? '計算中...' : `${totalPrice.toLocaleString()} 円`}
                </td>
                <td></td> {/* 操作列の空セル */}
              </tr>
            </tfoot>
          </table>
          <div style={{marginTop: '2rem', textAlign: 'right'}}>
            {/* TODO: 注文手続きへ進むボタン */}
            <button disabled={isCalculatingTotal} style={{padding: '10px 20px', fontSize: '1.1rem'}}>注文手続きへ</button>
          </div>
        </>
      ) : (
        <p>カートは空です。</p>
      )}
    </div>
  );
}