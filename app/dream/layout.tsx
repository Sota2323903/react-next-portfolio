import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "夢",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="夢" sub="Dream" />
      <Sheet>{children}</Sheet>
    </>
  );
}
