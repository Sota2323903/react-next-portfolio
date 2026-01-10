import { getDreamList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

const DREAM_LIST_LIMIT = 10;

export default async function Page() {
  const { contents: dreams, totalCount } = await getDreamList({
    limit: DREAM_LIST_LIMIT,
  });

  console.log("Dream data:", JSON.stringify({ dreams, totalCount }, null, 2));

  return (
    <>
      <NewsList news={dreams} />
      {totalCount === 0 && <p>夢がまだ登録されていません。</p>}
    </>
  );
}
