// components/ProtectedRoute.tsx
"use client";

import { useState, useEffect } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

type ProtectedRouteProps = {
  requiredGroup: 'admin' | 'user'; // このページに必要なグループを指定
  children: React.ReactNode;
};

export default function ProtectedRoute({ requiredGroup, children }: ProtectedRouteProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      // Middlewareのおかげで、この時点でユーザーは必ずログイン済み
      const session = await fetchAuthSession();
      const groups = (session.tokens?.accessToken.payload['cognito:groups'] as string[]) || [];
      
      if (groups.includes(requiredGroup)) {
        setIsAuthorized(true);
      } else {
        alert('このページにアクセスする権限がありません。');
        router.push('/'); // 権限違いの場合はホームへ
      }
      setIsLoading(false);
    };
    checkAuth();
  }, [requiredGroup, router]);

  if (isLoading) {
    return <div>権限を確認中...</div>;
  }

  return isAuthorized ? <>{children}</> : null;
}