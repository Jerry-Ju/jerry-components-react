import React from 'react';
import { CardLightBorder, JayPink } from 'jerry-components-react';

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
    <CardLightBorder color={JayPink.base} borderWidth={2} radius={8} style={{ width: 220 }}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        默认圆角
      </div>
      <div style={footerStyle}>品牌粉流光</div>
    </CardLightBorder>

    <CardLightBorder color={JayPink.p6} borderWidth={3} radius={16} style={{ width: 220 }}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        大圆角
      </div>
      <div style={footerStyle}>borderWidth=3, radius=16</div>
    </CardLightBorder>

    <CardLightBorder color={JayPink.p5} borderWidth={2} radius={9999} style={{ width: 220 }}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        胶囊圆角
      </div>
      <div style={footerStyle}>radius=9999</div>
    </CardLightBorder>
  </div>
);
