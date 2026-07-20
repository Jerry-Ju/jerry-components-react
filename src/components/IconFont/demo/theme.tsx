import React from 'react';
import { IconFont } from 'jerry-components-react';

const panelStyle: React.CSSProperties = {
  padding: 24,
  borderRadius: 8,
  border: '1px solid var(--border-base)',
};

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
    <div style={{ ...panelStyle, background: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>浅色主题</div>
      <IconFont type="pie_chart_outline" style={{ fontSize: 32 }} />
    </div>
    <div
      className="theme-dark"
      style={{ ...panelStyle, background: 'var(--bg-page)', color: 'var(--text-primary)' }}
    >
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>深色主题</div>
      <IconFont type="pie_chart_outline" style={{ fontSize: 32 }} />
    </div>
  </div>
);
