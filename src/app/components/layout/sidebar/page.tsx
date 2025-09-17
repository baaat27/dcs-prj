'use client'; // クライアントコンポーネントとして宣言

import { useState } from 'react';
import styles from "./sidebar.module.css"


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
                    <li><a href="/category1">カテゴリー 1</a></li>
                    <li><a href="/category2">カテゴリー 2</a></li>
                    <li><a href="/category3">カテゴリー 3</a></li>
                </ul>
            </nav>
        </aside>
  );
}