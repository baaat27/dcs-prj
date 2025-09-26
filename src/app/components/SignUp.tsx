// components/SignUp.tsx
"use client";

import { useState } from 'react';
import { signUp, confirmSignUp } from 'aws-amplify/auth';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null); // エラーメッセージ用のState

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setError(null); // 前のエラーをクリア

    if (password !== confirmPassword) {
      setError('パスワードが一致しません。');
      return; // 一致しない場合は、ここで処理を中断
    }

    try {
      await signUp({
        username: email,
        password: password,
        options: { userAttributes: { email } },
      });
      setStep(2);
    } catch (err: any) { // errorをany型として受け取る
      console.error('サインアップエラー:', err);

      // ここでエラーの種類を判定します
      if (err.name === 'InvalidPasswordException') {
        // パスワードポリシー違反の場合
        setError('パスワードは8文字以上で、大文字、小文字、数字、記号を含めてください。');
      } else if (err.name === 'UsernameExistsException') {
        // メールアドレスが既に使用されている場合
        setError('このメールアドレスは既に使用されています。');
      } else {
        // その他の一般的なエラー
        setError('登録中にエラーが発生しました。もう一度お試しください。');
      }
    }
  }

  async function handleConfirmation(e: React.FormEvent) {
    e.preventDefault();
    setError(null); // クリア
    try {
      await confirmSignUp({ username: email, confirmationCode });
      alert('アカウントの確認が完了しました！ログインしてください。');
      window.location.href = '/signin';
    } catch (err) {
      console.error('確認エラー:', err);
      setError('確認コードが正しくありません。');
    }
  }
  
  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleSignUp}>
          <h2>新規登録</h2>
          <input type="email" placeholder="メールアドレス" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="パスワード" onChange={e => setPassword(e.target.value)} />
          {/* 👇 エラーメッセージを画面に表示 */}
          {error && <p style={{ color: 'red', border: '1px solid red', padding: '10px' }}>{error}</p>}
          <button type="submit">登録</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleConfirmation}>
          <h2>メールアドレスの確認</h2>
          <p>{email}に送信された確認コードを入力してください。</p>
          <input type="text" placeholder="確認コード" onChange={e => setConfirmationCode(e.target.value)} />
           {/* 👇 こちらにもエラー表示を追加 */}
          {error && <p style={{ color: 'red', border: '1px solid red', padding: '10px' }}>{error}</p>}
          <button type="submit">確認</button>
        </form>
      )}
    </div>
  );
}