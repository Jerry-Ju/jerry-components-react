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

const RAINBOW_COLORS = ['#FF6B6B', '#FCBF51', '#FFE066', '#6BCB77', '#4D96FF', '#9B59B6'];

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
    <CardLightBorder trigger="always" colors={[JayPink.base]} style={{ width: 260 }} radius={12} borderWidth={2}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        单色
      </div>
      <div style={footerStyle}>colors={[JayPink.base]}</div>
    </CardLightBorder>

    <CardLightBorder
      trigger="always"
      colors={['#FF6B6B', '#FCBF51']}
      style={{ width: 260 }}
      radius={12}
      borderWidth={2}
    >
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        双色
      </div>
      <div style={footerStyle}>colors 长度 ≥ 2，弧带内平滑过渡</div>
    </CardLightBorder>

    <CardLightBorder trigger="always" colors={RAINBOW_COLORS} style={{ width: 260 }} radius={12} borderWidth={2}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        彩虹色
      </div>
      <div style={footerStyle}>多色数组组合渐变</div>
    </CardLightBorder>
  </div>
);
