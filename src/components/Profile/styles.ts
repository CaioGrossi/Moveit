import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-content: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    margin-left: 1.5rem;

    > strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${theme.colors.title};
    }

    > p {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  `}
`;
