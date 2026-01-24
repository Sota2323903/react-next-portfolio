import Image from "next/image";
import { getDreamList } from "@/app/_libs/microcms";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getDreamList();

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>夢がまだ登録されていません。</p>
      ) : (
        <ul className={styles.list}>
          {data.contents.map((dream) => (
            <li key={dream.id} className={styles.item}>
              {dream.syasinn?.url && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={dream.syasinn.url}
                    alt={dream.title}
                    width={dream.syasinn.width || 800}
                    height={dream.syasinn.height || 450}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.content}>
                <h2 className={styles.title}>{dream.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
