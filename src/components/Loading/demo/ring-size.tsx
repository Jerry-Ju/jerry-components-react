import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Loading type="ring" size={32} strokeWidth={2} />
    <Loading type="ring" size={48} strokeWidth={3} percent={25} />
    <Loading type="ring" size={64} strokeWidth={4} percent={35} speed={1.2} />
  </div>
);
