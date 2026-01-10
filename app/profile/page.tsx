import { getProfileList } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./page.module.css";

const PROFILE_LIST_LIMIT = 10;

export default async function Page() {
  const data = await getProfileList({ limit: PROFILE_LIST_LIMIT });

  console.log("Profile data:", JSON.stringify(data, null, 2));

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>プロフィールが登録されていません。</p>
      ) : (
        <ul className={styles.list}>
          {data.contents.map((profile) => (
            <li key={profile.id} className={styles.item}>
              {profile.image && (
                <Image
                  src={profile.image.url}
                  alt={profile.name || profile.title || ""}
                  width={profile.image.width}
                  height={profile.image.height}
                  className={styles.image}
                />
              )}
              <div className={styles.content}>
                <h2 className={styles.name}>{profile.name || profile.title}</h2>
                {profile.introduction && (
                  <p className={styles.introduction}>{profile.introduction}</p>
                )}
                {profile.content && (
                  <div className={styles.detail}>
                    <p>{profile.content}</p>
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
