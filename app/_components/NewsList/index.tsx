import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import Date from "../Date";
import { Dream } from "@/app/_libs/microcms";

type Props = {
  news: Dream[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/dream/${article.id}`} className={styles.link}>
            {article.image ? (
              <Image
                src={article.image.url}
                alt=""
                className={styles.image}
                width={article.image.width}
                height={article.image.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
