import Home from "../templates/Home";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home | Move.It</title>
      </Head>

      <Home />
    </>
  );
}
