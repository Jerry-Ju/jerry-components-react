import React from 'react';
import { IconFont } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', fontSize: 28 }}>
    <div style={{ textAlign: 'center' }}>
      <IconFont type="doughnut_chart" rotate={45} />
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>rotate=45</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconFont type="doughnut_chart" rotate={90} />
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>rotate=90</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconFont type="doughnut_chart" spin />
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>spin</div>
    </div>
  </div>
);
