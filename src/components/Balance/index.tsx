import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import * as s from './styles';

type BalanceProps = {
  children: React.ReactNode;
};

const Balance: React.FC<BalanceProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <s.BalanceContainer>
      {isVisible ? (
        <s.BalanceContentVisible>R$ {children}</s.BalanceContentVisible>
      ) : (
        <s.BalanceContentInvisible />
      )}
      <s.IconWrapper onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
      </s.IconWrapper>
    </s.BalanceContainer>
  );
};

export default Balance;
