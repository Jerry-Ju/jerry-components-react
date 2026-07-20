import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <Loading type="ecg" />
    <Loading type="ecg" color="#DE6262" />
    <Loading type="ecg" color="#1677ff" />
  </div>
);
