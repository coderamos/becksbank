import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Layout } from 'antd';

import logoWhite from 'assets/images/logo-white.svg';

export const HeaderContainer = styled(Layout.Header)`
  ${({ theme }) => css`
  height: 10vh;
  background: rgb(23,101,45);
  background: linear-gradient(345deg, rgba(23,101,45,1) 0%, rgba(11,66,36,1) 30%, rgba(21,45,47,1) 65%, rgba(23,23,23,1) 100%);
  color: ${props => props.theme.colors.white};
  line-height: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;

    & > div {
      align-items: center;
      display: flex;
      padding: 20px 0;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      ${media.greaterThan('medium')`
        flex-direction: row;
      `}
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

export const UserContainer = styled.div`
  width: 90%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  ${media.greaterThan('medium')`
      width: 20%;
      margin-top: 0;
  `}

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallTitle = styled.span`
  font-size: ${props => props.theme.font.sizes.small};
`;

export const Divisor = styled.div`

${media.greaterThan('medium')`
  height: 6vh;
  border: 1px solid;
  margin: 0 20px;
  opacity: 0.4;
`}
`;
