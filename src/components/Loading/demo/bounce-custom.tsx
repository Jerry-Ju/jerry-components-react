import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end' }}>
    <Loading type="bounce" color="#1677ff" size={24} gap={16} />
    <Loading type="bounce" color="#52c41a" size={16} gap={24} speed={0.7} />
  </div>
);
