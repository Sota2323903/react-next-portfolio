import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "お問い合わせ",
};

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Hero title="お問い合わせ" sub="Contact" />
      <Sheet>{children}</Sheet>
    </>
  );
}
