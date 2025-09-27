// components/ConfigureAmplify.tsx
"use client";

import { Amplify } from "aws-amplify";
import config from "../../../amplify_outputs.json";

// Amplifyライブラリにバックエンドの設定情報を読み込ませる.
Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  // このコンポーネントは画面には何も表示しない
  return null;
}