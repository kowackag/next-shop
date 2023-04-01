import React, { ReactNode } from "react";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-fgrow">{children}</div>
      <Footer />
    </div>
  );
};
