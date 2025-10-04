// amplify/storage/resource.ts

import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  // S3バケットに付ける名前（Amplifyが付与する接頭辞などが加わります）
  name: 'product-images',
  // アクセス権限を設定
  access: (allow) => ({
    // 'images/' フォルダ以下のすべてのファイルに対するルール
    'images/*': [
      // ゲスト（未ログインユーザー）には読み取り（read）のみを許可
      allow.guest.to(['read']),
      // 認証済み（ログイン済み）ユーザーには、読み取り、書き込み、削除を許可
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
  }),
});