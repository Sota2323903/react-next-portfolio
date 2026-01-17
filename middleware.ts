import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 認証APIへのリクエストは通過させる
  if (request.nextUrl.pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Cookieから認証状態を確認
  const authenticated = request.cookies.get("authenticated")?.value;

  // 認証されていない場合は、クライアント側でログイン画面を表示
  // （ミドルウェアではリダイレクトしない）
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
