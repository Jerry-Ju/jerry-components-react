import React from 'react';
import { CardLightBorder } from 'jerry-components-react';

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
    {(['slow', 'default', 'fast'] as const).map((speed) => (
      <CardLightBorder key={speed} speed={speed} style={{ width: 200 }} radius={12} borderWidth={2}>
        <div className="jerry-card-light-border__content" style={mediaStyle}>
          {speed}
        </div>
        <div style={footerStyle}>移入查看速度差异</div>
      </CardLightBorder>
    ))}
  </div>
);
