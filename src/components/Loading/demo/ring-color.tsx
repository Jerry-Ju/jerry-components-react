import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Loading type="ring" />
    <Loading type="ring" color="#1677ff" />
    <Loading type="ring" color="#52c41a" trackColor="#d9f7be" />
  </div>
);
