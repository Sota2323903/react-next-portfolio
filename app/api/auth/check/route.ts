import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Cookieから認証状態を確認
  const authenticated = request.cookies.get("authenticated")?.value;

  if (authenticated === "true") {
    return NextResponse.json({ authenticated: true });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
