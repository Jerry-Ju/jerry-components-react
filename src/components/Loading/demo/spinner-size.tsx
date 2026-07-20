import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
    <Loading type="spinner" color="#52c41a" size={56} />
    <Loading type="spinner" color="#1677ff" size={80} />
    <Loading type="spinner" color="#722ed1" size={120} speed={0.8} />
  </div>
);
