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
    <CardLightBorder trigger="always" direction="clockwise" style={{ width: 240 }} radius={12} borderWidth={2}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        顺时针
      </div>
      <div style={footerStyle}>direction=clockwise</div>
    </CardLightBorder>

    <CardLightBorder trigger="always" direction="counterclockwise" style={{ width: 240 }} radius={12} borderWidth={2}>
      <div className="jerry-card-light-border__content" style={mediaStyle}>
        逆时针
      </div>
      <div style={footerStyle}>direction=counterclockwise</div>
    </CardLightBorder>
  </div>
);
