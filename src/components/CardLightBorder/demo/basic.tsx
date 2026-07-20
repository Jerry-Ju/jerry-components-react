import React from 'react';
import { Button, CardLightBorder } from 'jerry-components-react';

const mediaStyle: React.CSSProperties = {
  aspectRatio: '16 / 9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-secondary)',
  fontSize: 13,
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '8px 6px 0',
  marginTop: 8,
};

export default () => (
  <CardLightBorder style={{ width: 320 }} radius={12} borderWidth={2}>
    <div className="jerry-card-light-border__content" style={mediaStyle}>
      封面区域 16:9
    </div>
    <div style={footerStyle}>
      <div style={{ fontSize: 14, fontWeight: 600 }}>数据概览</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
        鼠标移入卡片，边框流光在 padding 环带内环绕高亮。
      </div>
      <div>
        <Button size="small">查看详情</Button>
      </div>
    </div>
  </CardLightBorder>
);
