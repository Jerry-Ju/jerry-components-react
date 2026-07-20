import React, { useState } from 'react';
import { Skeleton } from 'jerry-components-react';
import { DemoPlayground, DemoSwitch } from './shared';

export default () => {
  const [active, setActive] = useState(true);

  return (
    <DemoPlayground
      controls={<DemoSwitch label="动画" checked={active} onChange={setActive} />}
    >
      <Skeleton active={active} avatar paragraph={{ rows: 3 }} />
    </DemoPlayground>
  );
};
