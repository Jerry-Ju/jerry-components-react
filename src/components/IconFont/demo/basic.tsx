import React, { useState } from 'react';
import { IconFont, copyText } from 'jerry-components-react';
import iconfontData from '../download/iconfont.json';

const icons = iconfontData.glyphs.map((glyph) => glyph.font_class);

export default () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (type: string) => {
    const ok = await copyText(type);
    if (!ok) {
      return;
    }

    setCopied(type);
    window.setTimeout(() => {
      setCopied((current) => (current === type ? null : current));
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, fontSize: 24 }}>
      {icons.map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 96 }}>
          <IconFont type={type} />
          <span
            role="button"
            tabIndex={0}
            title="点击复制"
            onClick={() => handleCopy(type)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleCopy(type);
              }
            }}
            style={{
              fontSize: 12,
              color: copied === type ? 'var(--color-primary)' : 'var(--text-secondary)',
              textAlign: 'center',
              wordBreak: 'break-all',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {copied === type ? '已复制' : type}
          </span>
        </div>
      ))}
    </div>
  );
};
