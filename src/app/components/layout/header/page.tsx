'use client';

import { useSession, signOut } from 'next-auth/react';
import styles from "./header.module.css";
import Link from 'next/link';

export default function Header() {
  const { data: session, status } = useSession();

  return (
        <header className={styles.header}>
        <a href="/">
            <h1>ウェブサイト</h1>
        </a>

        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">ホーム</Link></li>
                <li><Link href="/about">アバウト</Link></li>
                <li><Link href="/services">サービス</Link></li>
                <li><Link href="/contact">お問い合わせ</Link></li>
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