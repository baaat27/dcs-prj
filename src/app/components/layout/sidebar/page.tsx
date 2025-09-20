'use client'; // クライアントコンポーネントとして宣言

import { useState } from 'react';
import styles from "./sidebar.module.css"
import Link from 'next/link';

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
  return (
 <aside className={styles.sidebar}>
            <h2>サイドバーのタイトル</h2>
            <nav className={styles.sidebarNav}>
                <h3>カテゴリー</h3>
                <ul>
                    <li><Link href="/category1">カテゴリー 1</Link></li>
                    <li><Link href="/category2">カテゴリー 2</Link></li>
                    <li><Link href="/category3">カテゴリー 3</Link></li>
                </ul>
            </nav>
        </aside>
  );
}