import React from 'react';
import { Skeleton } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 40 }}>
    <div>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>active</div>
      <Skeleton avatar paragraph={{ rows: 3 }} />
    </div>
    <div>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>inactive</div>
      <Skeleton active={false} avatar paragraph={{ rows: 3 }} />
    </div>
  </div>
);
