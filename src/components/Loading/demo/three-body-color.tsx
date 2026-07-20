import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Loading type="threeBody" size={35} color="#5d3fd3" />
    <Loading type="threeBody" size={48} color="#1677ff" speed={0.6} />
  </div>
);
