import React, { useState } from 'react';
import { Skeleton } from 'jerry-components-react';
import { DemoPlayground, DemoSwitch } from './shared';

export default () => {
  const [buttonBlock, setButtonBlock] = useState(false);
  const [inputBlock, setInputBlock] = useState(false);

  return (
    <DemoPlayground
      controls={
        <>
          <DemoSwitch label="按钮块级" checked={buttonBlock} onChange={setButtonBlock} />
          <DemoSwitch label="输入框块级" checked={inputBlock} onChange={setInputBlock} />
        </>
      }
    >
      <Skeleton active>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          <Skeleton.Button block={buttonBlock} />
          <Skeleton.Input block={inputBlock} />
        </div>
      </Skeleton>
    </DemoPlayground>
  );
};
