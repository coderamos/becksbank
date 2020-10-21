import styled, { css } from 'styled-components';
import Card from 'components/Card';

export const DashboardContainer = styled.main`
  ${() => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  `}
`;

export const CardsWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.xxsmall} 0;
  `}
`;

export const FeatureCardWrapper = styled.div`
  width: 100%;
`;

export const FeatureCard = styled(Card)``;

export const DynamicContentWrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    margin: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.large};
    padding: ${theme.spacings.small};

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  `}
`;

export const TransferContentWrapper = styled.div``;

export const ExtractContentWrapper = styled.div``;
