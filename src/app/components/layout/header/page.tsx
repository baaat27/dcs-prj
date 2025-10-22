'use client';
import { useState, useEffect } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import styles from "./header.module.css";
import Link from 'next/link';
import { useCart } from '@/src//app/context/CartContext';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const { itemCount, isLoading: isCartLoading } = useCart();

  // コンポーネントが読み込まれた時に、ログイン状態を確認する
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // getCurrentUser()が成功すれば、ユーザーはログインしている
        const user = await getCurrentUser();
        setIsLoggedIn(true);
        // ユーザー名（メールアドレス）を取得
        setUsername(user.signInDetails?.loginId || user.username);
      } catch (error) {
        // エラーが出た場合は、ユーザーはログインしていない
        setIsLoggedIn(false);
      }
    };
    
    checkAuthStatus();
  }, []);

  // ログアウトボタンが押された時の処理
  const handleSignOut = async () => {
    try {
      await signOut();
      // ログアウト成功後、ホームページにリダイレクトしてページをリロード
      window.location.href = '/'; 
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  return (
        <header className={styles.header}>
        <Link href="/">
            <h1>ウェブサイト</h1>
        </Link>

        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">ホーム</Link></li>
                <li><Link href="/about">アバウト</Link></li>
                <li><Link href="/services">サービス</Link></li>
                <li><Link href="/contact">お問い合わせ</Link></li>
            </ul>
        </nav>
        {/* カートボタンを追加 */}
        <Link href="/cart" className={styles.cartButton}>
          カート
          {/* カートがロード中でなく、アイテム数が0より大きい場合のみバッジを表示 */}
          {!isCartLoading && itemCount > 0 && (
            <span className={styles.cartBadge}>{itemCount}</span>
          )}
        </Link>
        <div className={styles.auth_button}>
        {isLoggedIn ? (
          // ログイン済みの場合は、ユーザー名とログアウトボタンを表示
          <>
            <span style={{ marginRight: '16px' }}>ようこそ, {username} さん</span>
            <button onClick={handleSignOut} className={styles.button}>
              ログアウト
            </button>
          </>
        ) : (
          // 未ログインの場合は、ログインページへのリンクを表示
          <Link href="/login" className={styles.button}>
            ログイン
          </Link>
        )}
      </div>
        </header>
  );
}