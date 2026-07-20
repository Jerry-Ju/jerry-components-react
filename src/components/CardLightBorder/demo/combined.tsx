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
  <CardLightBorder
    trigger="always"
    direction="counterclockwise"
    speed="slow"
    colors={[JayPink.base, '#FCBF51', JayPink.p6]}
    style={{ width: 320 }}
    radius={16}
    borderWidth={3}
  >
    <div className="jerry-card-light-border__content" style={mediaStyle}>
      组合演示
    </div>
    <div style={footerStyle}>
      always + 逆时针 + 三色渐变 + slow + 粗边框
    </div>
  </CardLightBorder>
);
