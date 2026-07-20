import React from 'react';
import { CardLightBorder } from 'jerry-components-react';

const panelStyle: React.CSSProperties = {
  padding: 24,
};

const mediaStyle: React.CSSProperties = {
  aspectRatio: '16 / 9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 13,
  color: 'var(--text-secondary)',
};

const footerStyle: React.CSSProperties = {
  padding: '8px 6px 0',
  marginTop: 8,
  fontSize: 13,
  color: 'var(--text-secondary)',
};

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
    <div style={{ ...panelStyle, background: 'var(--bg-page)' }}>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>浅色主题</div>
      <CardLightBorder style={{ width: 260 }} radius={12} borderWidth={2}>
        <div className="jerry-card-light-border__content" style={mediaStyle}>
          封面
        </div>
        <div style={footerStyle}>跟随 --color-primary，hover 查看流光</div>
      </CardLightBorder>
    </div>

    <div className="theme-dark" style={{ ...panelStyle, background: 'var(--bg-page)' }}>
      <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--text-secondary)' }}>深色主题</div>
      <CardLightBorder style={{ width: 260 }} radius={12} borderWidth={2}>
        <div className="jerry-card-light-border__content" style={mediaStyle}>
          封面
        </div>
        <div style={footerStyle}>跟随 --color-primary，hover 查看流光</div>
      </CardLightBorder>
    </div>
  </div>
);
