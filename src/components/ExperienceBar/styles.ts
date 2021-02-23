import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: ${theme.grayline};
      margin: 0 1.5rem;
      position: relative;
    }

    > span {
      font-size: 1rem;
    }
  `}
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;

export const Bar = styled.div`
  ${({ theme }) => css`
    height: 4px;
    border-radius: 4px;
    background: ${theme.colors.green};
  `}
`;
