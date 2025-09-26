"use client";
import Header from "./components/layout/header/page";
import Footer from "./components/layout/footer/page";
import  "./globals.css";
import ConfigureAmplifyClientSide from "./components/ConfigureAmplify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <ConfigureAmplifyClientSide />
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
