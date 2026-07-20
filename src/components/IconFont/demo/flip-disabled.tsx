import React from 'react';
import { IconFont } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', fontSize: 28 }}>
    <div style={{ textAlign: 'center' }}>
      <IconFont type="bar_chart_horizontal" flip="horizontal" />
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>水平翻转</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconFont type="bar_chart_horizontal" flip="vertical" />
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>垂直翻转</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconFont type="trending_up" disabled />
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>禁用</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconFont
        type="trending_up"
        style={{ fontSize: 24, color: 'var(--color-primary)' }}
        onClick={() => {
          /* demo */
        }}
      />
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>可点击</div>
    </div>
  </div>
);
