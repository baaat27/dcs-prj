'use client';

import styles from "./header.module.css";
import Link from 'next/link';

export default function Header() {

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
        </header>
  );
}