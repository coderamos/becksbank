import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Layout } from 'antd';

import logoWhite from 'assets/images/logo-white.svg';

export const HeaderContainer = styled(Layout.Header)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.greenHigh};
    color: ${theme.colors.white};
    display: flex;
    height: 10vh;
    padding: 0;

    & > div {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;

const screenSize = media.lessThan('medium')``[1];
const size = [...screenSize].slice(0, 3).join('');
console.log(size);

export const Logo = styled.img.attrs({
  src: logoWhite
})`
  ${({ theme }) => css`
    height: 3rem;

    ${media.greaterThan('medium')`
      height: 4rem;
    `}
  `}
`;
