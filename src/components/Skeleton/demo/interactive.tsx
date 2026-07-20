import React, { useState } from 'react';
import { Skeleton } from 'jerry-components-react';
import { DemoPlayground, DemoSwitch } from './shared';

export default () => {
  const [active, setActive] = useState(true);
  const [showAvatar, setShowAvatar] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [showParagraph, setShowParagraph] = useState(true);
  const [round, setRound] = useState(false);

  return (
    <DemoPlayground
      controls={
        <>
          <DemoSwitch label="动画" checked={active} onChange={setActive} />
          <DemoSwitch label="头像" checked={showAvatar} onChange={setShowAvatar} />
          <DemoSwitch label="标题" checked={showTitle} onChange={setShowTitle} />
          <DemoSwitch label="段落" checked={showParagraph} onChange={setShowParagraph} />
          <DemoSwitch label="圆角" checked={round} onChange={setRound} />
        </>
      }
    >
      <Skeleton
        active={active}
        round={round}
        avatar={showAvatar}
        title={showTitle}
        paragraph={showParagraph ? { rows: 3 } : false}
      />
    </DemoPlayground>
  );
};
