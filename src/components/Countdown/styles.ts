import styled, { css } from "styled-components";

export const WrapperClock = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${theme.colors.title};

    > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  `}
`;

export const Time = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;

    justify-content: space-evenly;

    background: ${theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: ${theme.colors.blue};
    color: ${theme.colors.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

    &:not(:disabled):hover {
      background: ${theme.colors.blueDark};
    }

    &:disabled {
      background: ${theme.colors.white};
      color: ${theme.colors.title};
      cursor: not-allowed;
    }
  `}
`;

export const ActiveButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.title};

    &:not(:disabled):hover {
      background: ${theme.colors.red};
      color: ${theme.colors.white};
    }
  `}
`;
