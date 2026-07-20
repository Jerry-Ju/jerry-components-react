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
    <CardLightBorder style={{ width: 280 }} radius={12} borderWidth={2}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        默认开启
      </div>
      <div style={footerStyle}>hover 触发流光</div>
    </CardLightBorder>

    <CardLightBorder active={false} style={{ width: 280 }} radius={12} borderWidth={2}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        active=false
      </div>
      <div style={footerStyle}>hover 无光效</div>
    </CardLightBorder>
  </div>
);
