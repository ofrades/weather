import Head from "next/head";
import { styled } from "../stitches.config";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getWeather } from "../services/weather";
import Weather from "../components/Weather";

const queryClient = new QueryClient();

const Container = styled("div", {
  padding: "1rem",
});

export default function Home({ weather }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <Weather weather={weather} />
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export async function getServerProps() {
  const weather = await getWeather();
  return { props: { weather } };
}
