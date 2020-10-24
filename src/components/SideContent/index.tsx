import React from 'react';

import * as s from './styles';

const SideContent: React.FC = () => {
  return (
    <s.SideImageContainer>
      <s.Overlay>
        <s.OverlayTextWrapper>
          <s.OverlayTextTitle>
            Um banco legítimo e puro malte.
          </s.OverlayTextTitle>
          <s.OverlayTextDescription>
            O <s.DescriptionStrong>BECK’S BANK</s.DescriptionStrong> é um banco
            inovador, cheio de personalidade e indicado para quem possui um
            intenso modo de viver. O banco alemão mais amado no mundo!
          </s.OverlayTextDescription>
        </s.OverlayTextWrapper>
      </s.Overlay>
    </s.SideImageContainer>
  );
};

export default React.memo(SideContent);
