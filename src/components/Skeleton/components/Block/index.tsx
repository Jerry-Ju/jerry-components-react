import React from 'react';
import { useSkeletonContext } from '../../context';
import type { SkeletonBlockProps } from '../../types';
import { SkeletonElement } from '../Element';

const prefixCls = 'jerry-skeleton';

/** 矩形 / 圆形 / 圆角块占位，默认高度跟随 Skeleton size */
export const SkeletonBlock: React.FC<SkeletonBlockProps> = ({
  width = '100%',
  height,
  shape = 'rect',
  className,
  style,
}) => {
  const { sizeConfig } = useSkeletonContext();

  return (
    <SkeletonElement
      width={width}
      height={height ?? sizeConfig.blockHeight}
      shape={shape}
      blockClassName={`${prefixCls}__block`}
      className={className}
      style={style}
    />
  );
};

SkeletonBlock.displayName = 'SkeletonBlock';

export default SkeletonBlock;
