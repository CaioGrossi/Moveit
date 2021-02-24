import { Container } from "../../components/Container";
import ExperienceBar from "../../components/ExperienceBar";
import Profile from "../../components/Profile";
import CompletedChallenges from "../../components/CompletedChallenges";
import Countdonw from "../../components/Countdonw";
import ChallengeBox from "../../components/ChallengeBox";

import * as S from "./styles";

export default function Home() {
  return (
    <Container>
      <ExperienceBar />

      <S.MainSection>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdonw />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </S.MainSection>
    </Container>
  );
}
