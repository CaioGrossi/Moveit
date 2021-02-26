import { useChallengesContext } from "../../context/ChallengesContext";
import * as S from "./styles";

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useChallengesContext();

  return (
    <S.Overlay onClick={closeLevelUpModal}>
      <S.Wrapper>
        <S.Header>{level}</S.Header>
        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level</p>

        <S.CloseButton onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </S.CloseButton>
      </S.Wrapper>
    </S.Overlay>
  );
};

export default LevelUpModal;
