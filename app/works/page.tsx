import Image from "next/image";
import { getWorksList } from "@/app/_libs/microcms";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getWorksList();

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>作品がまだ登録されていません。</p>
      ) : (
        <ul className={styles.list}>
          {data.contents.map((work) => (
            <li key={work.id} className={styles.item}>
              {work.syasinn?.url && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={work.syasinn.url}
                    alt={work.title}
                    width={work.syasinn.width || 800}
                    height={work.syasinn.height || 450}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.content}>
                <h2 className={styles.title}>{work.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
