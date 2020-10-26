import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import * as s from './styles';

const antIcon = <LoadingOutlined style={{ fontSize: 55 }} spin />;

export default function Loading() {
  return (
    <s.LoadingWrapper>
      <Spin indicator={antIcon} />
    </s.LoadingWrapper>
  );
}
