import React from 'react';
import { Button } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
  </div>
);
