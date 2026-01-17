import { notFound } from "next/navigation";
import { getDreamDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";
import Date from "@/app/_components/Date";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getDreamDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  if (!data) {
    notFound();
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{data.title}</h1>
        {typeof data.description === "string" && (
          <p className={styles.description}>{data.description}</p>
        )}
        <div className={styles.meta}>
          <Date date={data.publishedAt ?? data.createdAt} />
        </div>
        {data.image && (
          <Image
            src={data.image.url}
            alt=""
            width={data.image.width}
            height={data.image.height}
            className={styles.image}
          />
        )}
        {typeof data.content === "string" && (
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <ButtonLink href="/dream">夢一覧へ</ButtonLink>
      </div>
    </>
  );
}
