import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "自己紹介",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="自己紹介" sub="Profile" />
      <Sheet>{children}</Sheet>
    </>
  );
}
