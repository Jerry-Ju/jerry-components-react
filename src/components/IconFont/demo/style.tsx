import React from 'react';
import { IconFont } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
    <IconFont type="trending_up" style={{ fontSize: 16 }} />
    <IconFont type="trending_up" style={{ fontSize: 24 }} />
    <IconFont type="trending_up" style={{ fontSize: 32 }} />
    <IconFont type="trending_up" style={{ fontSize: 24, color: 'var(--color-primary)' }} />
    <IconFont type="positive-dynamics" style={{ fontSize: 24, color: 'var(--text-secondary)' }} />
  </div>
);
