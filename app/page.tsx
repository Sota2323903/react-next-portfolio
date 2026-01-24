import styles from "./page.module.css";
import Image from "next/image";
import { getDreamList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIST } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import HeroSlider from "@/app/_components/HeroSlider";

export const revalidate = 60;

export default async function Home() {
  const data = await getDreamList({
    limit: TOP_NEWS_LIST,
  });

  return (
    <>
      <section className={styles.hero}>
        <HeroSlider />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleMain}>MY PORTFOLIO</span>
            <span className={styles.titleSub}>あなたの夢を叶える場所</span>
          </h1>
          <p className={styles.heroDescription}>
            限界を超えて、新しい自分を発見しよう
          </p>
        </div>
        <div className={styles.heroCharacter}>
          <Image
            src="/ChatGPT Image 2025年12月20日 15_15_44.png"
            alt="Character"
            width={600}
            height={600}
            className={styles.characterImage}
            priority
          />
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleLine}></span>
            ABOUT
            <span className={styles.titleLine}></span>
          </h2>
          <p className={styles.aboutText}>
            このポートフォリオサイトでは、私の夢と目標、そして自己紹介を紹介しています。
            <br />
            一緒に未来を創造しましょう。
          </p>
        </div>
      </section>

      <section className={styles.dreams}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleLine}></span>
            DREAMS
            <span className={styles.titleLine}></span>
          </h2>
          <NewsList news={data.contents} />
          <div className={styles.buttonCenter}>
            <ButtonLink href="/dream">もっと見る</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
