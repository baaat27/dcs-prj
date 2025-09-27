// middleware.ts
import { type NextRequest, NextResponse } from 'next/server';
// 👇 fetchAuthSession をサーバーサイドからインポート
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from './app/utils/amplify-server';

export const config = {
  matcher: [
    /*
     * Middlewareを実行するパス:
     * - /admin または /user で始まるすべてのパス
     */
    '/admin/:path*',
    '/user/:path*',
  ],
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // アクセスしようとしているページのパスを取得 (例: '/admin/dashboard')
  const { pathname } = request.nextUrl; 

  return await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        // 1. ユーザーセッション（トークン情報など）を取得
        const session = await fetchAuthSession(contextSpec);
        
        // ログインしていない場合はここでcatchに飛ぶので、以下はログイン済みユーザーの処理
        const groups = (session.tokens?.accessToken.payload['cognito:groups'] as string[]) || [];
        console.log(`[Middleware] Path: ${pathname}, Groups: ${groups.join(', ')}`);

        // 2. Adminページへのアクセス制御
        // '/admin'で始まるパスにアクセスしようとしているが、'admin'グループに所属していない場合
        if (pathname.startsWith('/admin') && !groups.includes('admin')) {
          console.log('[Middleware] Access Denied: Admin role required.');
          // ホームページにリダイレクト
          return NextResponse.redirect(new URL('/', request.url));
        }

        // 3. Userページへのアクセス制御 (もしAdminはUserページを見れないようにする場合)
        // if (pathname.startsWith('/user') && !groups.includes('user')) {
        //   console.log('[Middleware] Access Denied: User role required.');
        //   return NextResponse.redirect(new URL('/', request.url));
        // }

        // 4. すべてのチェックを通過した場合、そのまま目的のページを表示
        return response;

      } catch (error) {
        // 5. 未ログインの場合はサインインページへリダイレクト
        console.log('[Middleware] Unauthenticated access detected.');
        const signInUrl = new URL('/signin', request.url);
        // ログイン後に元のページに戻れるように、リダイレクト元のパスをクエリパラメータに付与
        signInUrl.searchParams.set('redirect_to', pathname);
        return NextResponse.redirect(signInUrl);
      }
    },
  });
}