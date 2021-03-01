import Home, { HomeTemplateProps } from "../templates/Home";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useChallengesContext } from "../context/ChallengesContext";

export default function Index(props: HomeTemplateProps) {
  return (
    <>
      <Head>
        <title>Home | Move.It</title>
      </Head>
      <Home {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, challengesCompleted, currentExperience } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience),
    },
  };
};
