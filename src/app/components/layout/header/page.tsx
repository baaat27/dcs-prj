'use client';

import { useSession, signOut } from 'next-auth/react';
import styles from "./header.module.css";


export default function Header() {
  const { data: session, status } = useSession();

  return (
        <header className={styles.header}>
        <a href="/">
            <h1>ウェブサイト</h1>
        </a>

        <nav className={styles.nav}>
            <ul>
                <li><a href="/">ホーム</a></li>
                <li><a href="/about">アバウト</a></li>
                <li><a href="/services">サービス</a></li>
                <li><a href="/contact">お問い合わせ</a></li>
                {status === 'authenticated' && (
                  <li>
                    <button onClick={() => signOut({ callbackUrl: '/admin/login' })} className={styles.logoutButton}>
                      ログアウト
                    </button>
                  </li>
                )}
            </ul>
        </nav>
        </header>
  );
}