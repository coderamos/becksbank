import styled, { css } from 'styled-components';

import loginSide from 'assets/images/login-side-image-full.png';

export const SideImageContainer = styled.div`
  height: 100vh;
  flex: 5;
  background: no-repeat url(${loginSide});
`;

export const Overlay = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  width: 50%;
`;

export const OverlayTextWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    color: ${theme.colors.white};
    flex-direction: column;
    justify-content: center;
    padding: 0 16rem;
  `}
`;

export const OverlayTextTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    font-weight: ${theme.font.bolder};
    color: ${theme.colors.white};
    padding: ${theme.spacings.medium} 0;
    margin: 0;
    line-height: ${theme.spacings.xxlarge};
  `}
`;

export const OverlayTextDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    text-align: justify;
  `}
`;

export const DescriptionStrong = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.germanYellow};
  `}
`;
