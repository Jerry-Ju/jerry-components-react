import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Loading type="cube" size={56} color="#1677ff" />
    <Loading type="cube" size={70} color="#52c41a" speed={1.2} />
  </div>
);
