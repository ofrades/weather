import React from "react";
import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Weather from "../components/Weather";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Weather</title>
      </Head>
      <Weather />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
