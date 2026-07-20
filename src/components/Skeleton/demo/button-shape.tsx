import React, { useState } from 'react';
import type { SkeletonButtonShape } from 'jerry-components-react';
import { Skeleton } from 'jerry-components-react';
import { buttonShapeOptions, DemoPlayground, DemoSegment } from './shared';

export default () => {
  const [shape, setShape] = useState<SkeletonButtonShape>('default');

  return (
    <DemoPlayground
      controls={
        <DemoSegment
          label="按钮形状"
          value={shape}
          options={[...buttonShapeOptions]}
          onChange={setShape}
        />
      }
    >
      <Skeleton active>
        <Skeleton.Button shape={shape} />
      </Skeleton>
    </DemoPlayground>
  );
};
