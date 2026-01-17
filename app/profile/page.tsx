import { getProfileList } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./page.module.css";

const PROFILE_LIST_LIMIT = 10;

export default async function Page() {
  const data = await getProfileList({ limit: PROFILE_LIST_LIMIT });

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>プロフィールが登録されていません。</p>
      ) : (
        <div className={styles.profileList}>
          {data.contents.map((profile) => (
            <div key={profile.id} className={styles.profileCard}>
              {profile.image?.url && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={profile.image.url}
                    alt={profile.name || "プロフィール画像"}
                    width={profile.image.width || 300}
                    height={profile.image.height || 300}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.content}>
                <h2 className={styles.name}>
                  {profile.name || "名前を入力してください"}
                </h2>
                {profile.title && (
                  <p className={styles.birthplace}>
                    <span className={styles.label}>出身地：</span>
                    {profile.title}
                  </p>
                )}
                {profile.introduction && (
                  <p className={styles.introduction}>{profile.introduction}</p>
                )}
                {!profile.name && !profile.introduction && !profile.title && (
                  <p className={styles.introduction}>
                    MicroCMSで以下のフィールドを入力してください：
                    <br />
                    • name（名前）
                    <br />
                    • introduction（自己紹介文）
                    <br />
                    • image（プロフィール画像）
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
