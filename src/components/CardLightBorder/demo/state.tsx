import React, { useState } from 'react';
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

export default () => {
  const [selected, setSelected] = useState(false);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      <CardLightBorder state="focus" trigger="hover" style={{ width: 240 }} radius={12} borderWidth={2}>
        <div className="jerry-card-light-border__content" style={mediaStyle}>
          Tab 聚焦
        </div>
        <div style={footerStyle}>state=focus，可 Tab 聚焦后常亮旋转</div>
      </CardLightBorder>

      <div
        style={{ width: 240, cursor: 'pointer' }}
        onClick={() => setSelected((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setSelected((value) => !value);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <CardLightBorder
          state={selected ? 'selected' : 'default'}
          trigger={selected ? 'always' : 'hover'}
          fixedAngle={selected ? 45 : undefined}
          radius={12}
          borderWidth={2}
        >
          <div className="jerry-card-light-border__content" style={mediaStyle}>
            {selected ? '已选中' : '点击选中'}
          </div>
          <div style={footerStyle}>
            {selected ? 'fixedAngle=45 固定亮带' : 'trigger=hover，移入流光'}
          </div>
        </CardLightBorder>
      </div>
    </div>
  );
};
