"use client";
import Header from "./components/layout/header/page";
import Footer from "./components/layout/footer/page";
import  "./globals.css";
import Styles from "./page.module.css"
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SessionProvider>{children}</SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
