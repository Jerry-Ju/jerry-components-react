import React, { useState } from 'react';
import { Skeleton } from 'jerry-components-react';
import { DemoPlayground, DemoSwitch } from './shared';

const cardStyle: React.CSSProperties = {
  padding: 16,
  border: '1px solid var(--border-base)',
  borderRadius: 8,
  maxWidth: 360,
};

export default () => {
  const [loading, setLoading] = useState(true);

  return (
    <DemoPlayground
      controls={<DemoSwitch label="加载中" checked={loading} onChange={setLoading} />}
    >
      <Skeleton loading={loading} avatar paragraph={{ rows: 3 }}>
        <div style={cardStyle}>
          <h4 style={{ margin: '0 0 8px' }}>文章标题</h4>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
            数据加载完成后，骨架屏平滑替换为真实内容，减少白屏等待焦虑。
          </p>
        </div>
      </Skeleton>
    </DemoPlayground>
  );
};
