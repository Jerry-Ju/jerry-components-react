import React from 'react';
import { Button } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button variant="primary">Primary</Button>
    <Button variant="default">Default</Button>
    <Button variant="text">Text</Button>
  </div>
);
