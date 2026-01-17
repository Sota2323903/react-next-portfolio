import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/dream">夢</Link>
          </li>
          <li className={styles.item}>
            <Link href="/profile">自己紹介</Link>
          </li>
          <li className={styles.item}>
            <Link href="/works">作品</Link>
          </li>
          <li className={styles.item}>
            <Link href="/qualification">資格</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© SIMPLE. ALL Rights Reserved 2024</p>
    </footer>
  );
}
