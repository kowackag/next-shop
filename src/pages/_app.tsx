import React, { useState } from "react";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
