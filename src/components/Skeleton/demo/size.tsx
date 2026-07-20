import React from 'react';
import { Skeleton } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
    <div>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>small</div>
      <Skeleton size="small" avatar paragraph={{ rows: 2 }} />
    </div>
    <div>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>medium</div>
      <Skeleton size="medium" avatar paragraph={{ rows: 2 }} />
    </div>
    <div>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>large</div>
      <Skeleton size="large" avatar paragraph={{ rows: 2 }} />
    </div>
  </div>
);
