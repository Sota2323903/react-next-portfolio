import styles from "./index.module.css";
import HeroSlider from "../HeroSlider";

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
      <HeroSlider />
    </section>
  );
}
