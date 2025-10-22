"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import { getCurrentUser } from 'aws-amplify/auth';

const client = generateClient<Schema>();
type CartItem = Schema['CartItem']['type'];

// Contextの型定義
type CartContextType = {
  items: CartItem[];
  itemCount: number;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  isLoading: boolean;
};

// Contextを作成
const CartContext = createContext<CartContextType | undefined>(undefined);

// アプリ全体をラップするプロバイダーコンポーネント
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // カートの中身を取得する関数
  const fetchCartItems = useCallback(async () => {
    setIsLoading(true);
    try {
      await getCurrentUser(); // ログインしているか確認
      const { data } = await client.models.CartItem.list();
      setItems(data);
    } catch (error) {
      console.log("ユーザーはログインしていません。カートは空です。");
      setItems([]); // 未ログイン時はカートを空にする
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 最初にカートを取得
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  // カートに商品を追加する関数
  const addToCart = async (productId: string, quantity: number) => {
    try {
      // 同じ商品がカートに既にないかチェック
      const existingItem = items.find(item => item.productId === productId);
      let updatedItems = [...items];
      if (existingItem) {
        // あれば数量を更新
        const { data: updatedItem } = await client.models.CartItem.update({
          id: existingItem.id,
          quantity: existingItem.quantity + quantity,
        });
        // ローカルのstateも更新
        if (updatedItem) {
          // ローカルのstateも更新
          setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
        }
      } else {
        // なければ新規作成
        const { data: newItem } = await client.models.CartItem.create({
          productId,
          quantity,
        });
        // ローカルのstateに追加
        if(newItem) setItems([...items, newItem]);
      }
      // --- デバッグ用ログ追加 ---
    console.log('カートに追加後のアイテム:', updatedItems); 
    console.log('カートの合計アイテム数:', updatedItems.reduce((sum, item) => sum + item.quantity, 0));
    // --- デバッグ用ログ追加 ---
      alert("カートに追加しました！");
    } catch (error) {
      console.error("カートへの追加に失敗しました:", error);
      alert("カートへの追加にはログインが必要です。");
    }
  };

  const value = {
    items,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    addToCart,
    isLoading,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 他のコンポーネントから簡単にContextを呼び出すためのカスタムフック
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}