import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Loading
      type="threeBody"
      color="#1677ff"
      colors={['#1677ff', '#722ed1', '#52c41a']}
      size={40}
    />
    <Loading
      type="threeBody"
      color="#fa541c"
      colors={['#fa541c', '#faad14', '#52c41a', '#1677ff']}
      size={48}
      speed={1}
    />
  </div>
);
