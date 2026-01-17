import { getQualificationList } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./page.module.css";

const QUALIFICATION_LIST_LIMIT = 20;

export default async function Page() {
  const data = await getQualificationList({ limit: QUALIFICATION_LIST_LIMIT });

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>資格がまだ登録されていません。</p>
      ) : (
        <ul className={styles.list}>
          {data.contents.map((qualification) => (
            <li key={qualification.id} className={styles.item}>
              {qualification.image?.url && (
                <Image
                  src={qualification.image.url}
                  alt={qualification.title || "資格画像"}
                  width={qualification.image.width || 400}
                  height={qualification.image.height || 300}
                  className={styles.image}
                />
              )}
              <div className={styles.content}>
                <h2 className={styles.name}>{qualification.title}</h2>
                {qualification.issuer && (
                  <p className={styles.issuer}>
                    発行元: {qualification.issuer}
                  </p>
                )}
                {qualification.date && (
                  <p className={styles.date}>取得日: {qualification.date}</p>
                )}
                {qualification.description &&
                  typeof qualification.description === "string" && (
                    <div className={styles.description}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: qualification.description,
                        }}
                      />
                    </div>
                  )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
