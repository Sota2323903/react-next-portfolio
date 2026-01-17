"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Login from "./_components/Login";
import Loading from "./_components/Loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isContentLoading, setIsContentLoading] = useState(false);

  useEffect(() => {
    // 認証状態を確認
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check");
        if (response.ok) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated && pathname === "/login") {
      router.replace("/");
    }
  }, [isAuthenticated, pathname, router]);

  const handleLogin = async (password: string) => {
    setIsContentLoading(true);
    // ログイン成功後、少し待ってからコンテンツを表示
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsContentLoading(false);
    }, 1000);
  };

  // 初回ロード中
  if (isLoading) {
    return (
      <html lang="ja">
        <body>
          <Loading />
        </body>
      </html>
    );
  }

  // コンテンツロード中（ログイン後）
  if (isContentLoading) {
    return (
      <html lang="ja">
        <body>
          <Loading />
        </body>
      </html>
    );
  }

  // 未認証の場合はログイン画面（/login は専用ページを表示）
  if (!isAuthenticated && pathname !== "/login") {
    return (
      <html lang="ja">
        <body>
          <Login onLogin={handleLogin} />
        </body>
      </html>
    );
  }

  // 認証済みの場合は通常のコンテンツ
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
