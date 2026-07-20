import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Loading type="cradle" color="#1677ff" dots={4} />
    <Loading type="cradle" color="#52c41a" dots={4} size={40} />
    <Loading type="cradle" color="#ff4d4f" dots={4} size={60} speed={0.8} />
  </div>
);
