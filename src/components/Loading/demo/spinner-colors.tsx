import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
    <Loading type="spinner" colors={['#FFA6C9', '#1677ff']} />
    <Loading type="spinner" colors={['#1677ff', '#722ed1', '#52c41a']} />
    <Loading type="spinner" colors={['#f5222d', '#faad14']} size={100} />
  </div>
);
