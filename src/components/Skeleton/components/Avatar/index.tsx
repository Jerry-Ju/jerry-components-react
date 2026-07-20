import React from 'react';
import { useSkeletonContext } from '../../context';
import type { SkeletonAvatarProps } from '../../types';
import { SkeletonElement } from '../Element';

const prefixCls = 'jerry-skeleton';

/** 头像占位，尺寸跟随 Skeleton size，默认 medium 为 40px */
export const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
  size,
  shape = 'circle',
  className,
  style,
}) => {
  const { sizeConfig } = useSkeletonContext();
  const avatarSize = size ?? sizeConfig.avatarSize;

  return (
    <SkeletonElement
      width={avatarSize}
      height={avatarSize}
      shape={shape === 'circle' ? 'circle' : 'round'}
      blockClassName={`${prefixCls}__avatar`}
      className={className}
      style={style}
    />
  );
};

SkeletonAvatar.displayName = 'SkeletonAvatar';

export default SkeletonAvatar;
