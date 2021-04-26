import React from "react";
import Head from "next/head";
import { styled } from "../stitches.config";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Weather from "../components/Weather";

import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createLocalStoragePersistor } from "react-query/createLocalStoragePersistor-experimental";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const localStoragePersistor = createLocalStoragePersistor();

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

const Container = styled("div", {});

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <Weather />
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
