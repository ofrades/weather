import React from "react";
import Head from "next/head";
import { styled } from "../stitches.config";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getLocation } from "../services/weather";
import Layout from "../components/Layout";

const queryClient = new QueryClient();

const Container = styled("div", {});

export default function Home({ location }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <Layout location={location} />
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export async function getServerProps() {
  const location = await getLocation();
  return { props: { location } };
}
