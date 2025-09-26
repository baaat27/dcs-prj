// middleware.ts
import { type NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from './app/utils/amplify-server'; // ステップ1で作成

// このconfigで、Middlewareをどのページで実行するかを指定します
export const config = {
  matcher: [
    /*
     * マッチするパス:
     * - /admin または /user で始まるすべてのパス
     */
    '/admin/:path*',
    '/user/:path*',
  ],
};

export async function middleware(request: NextRequest) {
  // runWithAmplifyServerContextでラップして、サーバーサイドでAmplifyを安全に使う
  return await runWithAmplifyServerContext({
    nextServerContext: { request } as any,
    operation: async (contextSpec) => {
      try {
        // サーバーサイドで現在のユーザーを取得しようと試みる
        const user = await getCurrentUser(contextSpec);
        console.log('認証済みユーザー:', user.userId);
        // 成功すれば、そのまま目的のページへ進む
        return NextResponse.next();
      } catch (error) {
        // getCurrentUserがエラーを投げた場合 = 未ログイン
        console.log('未認証のアクセスを検知。サインインページにリダイレクトします。');
        
        // リダイレクト先のURLを作成
        const signInUrl = new URL('/signin', request.url);
        
        // ログイン後に元のページに戻れるよう、リダイレクト元をクエリパラメータに付与
        signInUrl.searchParams.set('redirect_to', request.url);

        return NextResponse.redirect(signInUrl);
      }
    },
  });
}