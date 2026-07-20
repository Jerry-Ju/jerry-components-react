import React, { useState } from 'react';
import type { Size } from '@types';
import type { SkeletonAvatarProps, SkeletonButtonShape } from 'jerry-components-react';
import { Skeleton } from 'jerry-components-react';
import {
  avatarShapeOptions,
  buttonShapeOptions,
  DemoPlayground,
  DemoSegment,
  DemoSwitch,
  sizeOptions,
} from './shared';

export default () => {
  const [active, setActive] = useState(true);
  const [size, setSize] = useState<Size>('medium');
  const [buttonBlock, setButtonBlock] = useState(false);
  const [inputBlock, setInputBlock] = useState(false);
  const [buttonShape, setButtonShape] = useState<SkeletonButtonShape>('default');
  const [avatarShape, setAvatarShape] = useState<SkeletonAvatarProps['shape']>('circle');
  const [imageIcon, setImageIcon] = useState(true);
  const [nodeIcon, setNodeIcon] = useState(false);

  return (
    <DemoPlayground
      controls={
        <>
          <DemoSwitch label="动画" checked={active} onChange={setActive} />
          <DemoSegment label="尺寸" value={size} options={sizeOptions} onChange={setSize} />
          <DemoSwitch label="按钮块级" checked={buttonBlock} onChange={setButtonBlock} />
          <DemoSwitch label="输入框块级" checked={inputBlock} onChange={setInputBlock} />
          <DemoSegment
            label="按钮形状"
            value={buttonShape}
            options={[...buttonShapeOptions]}
            onChange={setButtonShape}
          />
          <DemoSegment
            label="头像形状"
            value={avatarShape ?? 'circle'}
            options={[...avatarShapeOptions]}
            onChange={(value) => setAvatarShape(value as SkeletonAvatarProps['shape'])}
          />
          <DemoSwitch label="图片图标" checked={imageIcon} onChange={setImageIcon} />
          <DemoSwitch label="节点图标" checked={nodeIcon} onChange={setNodeIcon} />
        </>
      }
    >
      <Skeleton active={active} size={size}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Skeleton.Button shape={buttonShape} block={buttonBlock} />
          <Skeleton.Avatar shape={avatarShape} />
          <Skeleton.Input block={inputBlock} />
        </div>
        <div style={{ marginTop: 16 }}>
          <Skeleton.Paragraph rows={2} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 16 }}>
          <Skeleton.Image icon={imageIcon} />
          <Skeleton.Node />
          <Skeleton.Node icon={nodeIcon} />
        </div>
      </Skeleton>
    </DemoPlayground>
  );
};
