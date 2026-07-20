import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Loading type="cradle" dots={3} />
    <Loading type="cradle" dots={4} />
    <Loading type="cradle" dots={5} />
  </div>
);
