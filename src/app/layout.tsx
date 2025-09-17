"use client";
import Header from "./components/layout/header/page";
import Footer from "./components/layout/footer/page";
import  "./globals.css";
import Styles from "./page.module.css"
import { AuthProvider } from "./components/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
