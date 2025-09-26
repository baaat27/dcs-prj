// components/SignIn.tsx
"use client";

import { useState } from 'react';
import { signIn, fetchAuthSession } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // 1. まずサインインを実行
      await signIn({ username: email, password });
      
      // 2. ユーザーのセッション情報を取得
      const session = await fetchAuthSession();
      
      // 3. セッショントークンからユーザーグループを取得
      const groups = (session.tokens?.accessToken.payload['cognito:groups'] as String[]) || [];
      
      // 4. グループに応じてリダイレクト先を振り分け
      if (groups.includes('admin')) {
        router.push('/admin/dashboard');
      } else if (groups.includes('user')) {
        router.push('/user/profile');
      } else {
        // グループに所属していない場合のデフォルトリダイレクト
        router.push('/');
      }
    } catch (error) {
      console.error('サインインエラー:', error);
      alert('メールアドレスまたはパスワードが正しくありません。');
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>サインイン</h2>
      <input type="email" placeholder="メールアドレス" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="パスワード" onChange={e => setPassword(e.target.value)} />
      <button type="submit">サインイン</button>
    </form>
  );
}