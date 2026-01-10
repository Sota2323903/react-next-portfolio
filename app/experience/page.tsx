import { getExperienceList } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./page.module.css";

const EXPERIENCE_LIST_LIMIT = 20;

export default async function Page() {
  const data = await getExperienceList({ limit: EXPERIENCE_LIST_LIMIT });

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>経験がまだ登録されていません。</p>
      ) : (
        <div className={styles.timeline}>
          {data.contents.map((experience, index) => (
            <div key={experience.id} className={styles.item}>
              <div className={styles.marker}></div>
              <div className={styles.card}>
                {experience.image?.url && (
                  <Image
                    src={experience.image.url}
                    alt={experience.title || "経験画像"}
                    width={experience.image.width || 800}
                    height={experience.image.height || 400}
                    className={styles.image}
                  />
                )}
                <div className={styles.content}>
                  <h2 className={styles.title}>{experience.title}</h2>
                  {experience.company && (
                    <p className={styles.company}>{experience.company}</p>
                  )}
                  {experience.position && (
                    <p className={styles.position}>{experience.position}</p>
                  )}
                  {experience.period && (
                    <p className={styles.period}>{experience.period}</p>
                  )}
                  {experience.description && (
                    <p className={styles.description}>
                      {experience.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
