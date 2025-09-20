// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

// Userオブジェクトの型を拡張
declare module "next-auth" {
  interface User extends DefaultUser {
    // authorizeコールバックから返されるオブジェクトにroleを追加
    role?: string;
  }

  interface Session extends DefaultSession {
    // useSession()やgetSession()から返されるSessionオブジェクトにroleを追加
    user?: User; // ここで拡張したUser型を使用
  }
}

// JWTオブジェクトの型を拡張
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    // jwtコールバックのtokenにroleを追加
    role?: string;
  }
}