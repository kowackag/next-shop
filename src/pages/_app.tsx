import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "src/components/Layout";
import { CartStateContextProvider } from "src/components/Cart/CartContext";
import { apolloClient } from "src/graphql/apolloClient";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </CartStateContextProvider>
    </ApolloProvider>
  );
}
