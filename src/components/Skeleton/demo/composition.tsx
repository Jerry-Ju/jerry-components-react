import React from 'react';
import { Skeleton } from 'jerry-components-react';

export default () => (
  <Skeleton active>
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', maxWidth: 420 }}>
      <Skeleton.Avatar size={48} shape="circle" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Skeleton.Title width="45%" />
        <Skeleton.Paragraph rows={3} />
        <Skeleton.Block width="100%" height={96} shape="round" />
      </div>
    </div>
  </Skeleton>
);
