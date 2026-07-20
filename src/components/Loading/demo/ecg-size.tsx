import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 360 }}>
    <Loading type="ecg" width={160} height={61} />
    <Loading type="ecg" width={330} height={126} speed={3} strokeWidth={6} />
    <Loading type="ecg" width="100%" height="80px" />
  </div>
);
