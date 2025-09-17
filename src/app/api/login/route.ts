import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // ユーザー名とパスワードの検証
    // ここでは単純なハードコードされた値を使用していますが、実際にはデータベースと照合します
    if (username === 'admin' && password === 'password123') {
      // 認証が成功した場合
      // 実際のアプリケーションでは、セッションIDやJWTトークンを返します
      return NextResponse.json({ success: true, message: 'ログイン成功' });
    } else {
      // 認証が失敗した場合
      return NextResponse.json({ success: false, message: 'ユーザー名またはパスワードが間違っています' }, { status: 401 });
    }
  } catch (error) {
    // リクエストのパースエラーなど
    return NextResponse.json({ success: false, message: 'サーバーエラー' }, { status: 500 });
  }
}