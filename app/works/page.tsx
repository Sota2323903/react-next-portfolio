import Image from "next/image";
import { getWorksList } from "@/app/_libs/microcms";
import styles from "./page.module.css";

const WORKS_LIST_LIMIT = 20;

export default async function Page() {
  const data = await getWorksList({ limit: WORKS_LIST_LIMIT });

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>作品がまだ登録されていません。</p>
      ) : (
        <ul className={styles.list}>
          {data.contents.map((work) => (
            <li key={work.id} className={styles.item}>
              {work.image?.url && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={work.image.url}
                    alt={work.title}
                    width={work.image.width || 800}
                    height={work.image.height || 450}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.content}>
                <h2 className={styles.title}>{work.title}</h2>
                {work.description && (
                  <p className={styles.description}>{work.description}</p>
                )}
                {work.url && (
                  <a
                    className={styles.link}
                    href={work.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    作品を見る
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
