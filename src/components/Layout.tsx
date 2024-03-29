import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>eminent shop</title>
        <meta name="description" content="eminent shop" />
      </Head>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
