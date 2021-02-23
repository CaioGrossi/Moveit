import { Container } from "../../components/Container";
import ExperienceBar from "../../components/ExperienceBar";
import Profile from "../../components/Profile";
import CompletedChallenges from "../../components/CompletedChanllenges";
import Countdonw from "../../components/Countdonw";

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

        <div></div>
      </S.MainSection>
    </Container>
  );
}
