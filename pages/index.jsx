import React from "react";
import Head from "next/head";
import { styled } from "../stitches.config";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getLocation, getCity } from "../services/weather";
import Weather from "../components/Weather";

const queryClient = new QueryClient();

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
