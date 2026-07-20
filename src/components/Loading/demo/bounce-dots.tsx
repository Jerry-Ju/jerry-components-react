import React from 'react';
import { Loading } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end' }}>
    <Loading type="bounce" dots={1} />
    <Loading type="bounce" dots={3} />
    <Loading type="bounce" dots={5} />
  </div>
);
