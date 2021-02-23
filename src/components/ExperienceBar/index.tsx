import * as S from "./styles";

export default function ExperienceBar() {
  return (
    <S.Wrapper>
      <span>0 xp</span>
      <div>
        <S.Bar style={{ width: "50%" }}></S.Bar>
        <S.CurrentExperience style={{ left: "50%" }}>
          300 xp
        </S.CurrentExperience>
      </div>
      <span>600 xp</span>
    </S.Wrapper>
  );
}
