import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import Head from "next/head";
import requests from "../../utils/requests";

export default function Home({ results }) {
  // console.log(results);
  return (
    <div>
      <Head>
        <title>MovieFetcher</title>
      </Head>
      {/* Header */}
      <Header />
      {/* navbar */}
      <Navbar />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}

//==========================server side  rendering==========================
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3/${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
