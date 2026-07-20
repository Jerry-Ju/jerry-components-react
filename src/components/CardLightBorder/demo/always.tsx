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
    <CardLightBorder trigger="hover" style={{ width: 260 }} radius={12} borderWidth={2}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        trigger=hover
      </div>
      <div style={footerStyle}>移入播放，移出暂停</div>
    </CardLightBorder>

    <CardLightBorder trigger="always" style={{ width: 260 }} radius={12} borderWidth={2}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        trigger=always
      </div>
      <div style={footerStyle}>常驻流光，无需 hover</div>
    </CardLightBorder>
  </div>
);
