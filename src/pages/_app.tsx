import React from "react";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Layout } from "src/components/Layout";
import { CartStateContextProvider } from "src/constans/CartContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartStateContextProvider>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </CartStateContextProvider>
  );
}
