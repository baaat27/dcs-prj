import styles from "./footer.module.css";

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <nav>
            <ul>
                <li><a href="/about">会社概要</a></li>
                <li><a href="/privacy">プライバシーポリシー</a></li>
                <li><a href="/terms">利用規約</a></li>
                <li><a href="/contact">お問い合わせ</a></li>
            </ul>
        </nav>

        <p>&copy; 2025 私のウェブサイト. All Rights Reserved.</p>
      </footer>
  );
}