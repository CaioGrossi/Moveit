import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};

    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;

    strong {
      font-size: 2.25rem;
      color: ${theme.colors.title};
    }

    p {
      font-size: 1.25rem;
      color: ${theme.colors.text};
      margin-top: 0.25rem;
    }
  `}
`;

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  ${({ theme }) => css`
    font-size: 8.75rem;
    font-weight: 600;
    color: ${theme.colors.blue};
    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0;
`;
