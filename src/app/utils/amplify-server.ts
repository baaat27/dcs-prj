// utils/amplify-server.ts
import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import config from '../../../amplify_outputs.json';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

export const { runWithAmplifyServerContext } = createServerRunner({
  config
});

export const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
  // もしAuthカテゴリを使っている場合は、authModeを指定
  // authMode: 'userPool' 
});