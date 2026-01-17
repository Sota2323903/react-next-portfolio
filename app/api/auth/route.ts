import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // 環境変数からパスワードを取得
    const correctPassword = process.env.NEXTAUTH_PASSWORD || "admin";

    if (password === correctPassword) {
      const response = NextResponse.json({ success: true });

      // セッションCookieを設定（1日有効）
      response.cookies.set("authenticated", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24時間
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 },
    );
  }
}
