import React from 'react';
import { Skeleton } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
    <div>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>list</div>
      <Skeleton template="list" count={3} />
    </div>
    <div>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>card</div>
      <Skeleton template="card" />
    </div>
    <div>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>detail</div>
      <Skeleton template="detail" rows={4} />
    </div>
  </div>
);
