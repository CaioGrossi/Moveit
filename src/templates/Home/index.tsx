import { Container } from "../../components/Container";
import ExperienceBar from "../../components/ExperienceBar";
import Profile from "../../components/Profile";
import CompletedChallenges from "../../components/CompletedChallenges";
import Countdown from "../../components/Countdown";
import ChallengeBox from "../../components/ChallengeBox";

import * as S from "./styles";
import CountdownProvider from "../../context/CountDownContext";
import ChallengesProvider from "../../context/ChallengesContext";

export type HomeTemplateProps = {
  currentExperience: number;
  challengesCompleted: number;
  level: number;
};

export default function Home({
  level,
  challengesCompleted,
  currentExperience,
}: HomeTemplateProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <ExperienceBar />

        <CountdownProvider>
          <S.MainSection>
            <div>
              <Profile />
              <CompletedChallenges challengesCompleted={challengesCompleted} />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </S.MainSection>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
}
