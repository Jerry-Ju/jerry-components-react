import React, { useState } from 'react';
import type { Size } from '@types';
import { Skeleton } from 'jerry-components-react';
import { DemoPlayground, DemoSegment, sizeOptions } from './shared';

export default () => {
  const [size, setSize] = useState<Size>('medium');

  return (
    <DemoPlayground
      controls={<DemoSegment label="尺寸" value={size} options={sizeOptions} onChange={setSize} />}
    >
      <Skeleton size={size} avatar paragraph={{ rows: 2 }} />
    </DemoPlayground>
  );
};
