import React from 'react';
import { useSkeletonContext } from '../../context';
import type { SkeletonTitleProps } from '../../types';
import { SkeletonElement } from '../Element';

const prefixCls = 'jerry-skeleton';

/** 标题条占位，高度跟随 Skeleton size */
export const SkeletonTitle: React.FC<SkeletonTitleProps> = ({
  width = '38%',
  height,
  className,
  style,
}) => {
  const { sizeConfig } = useSkeletonContext();

  return (
    <SkeletonElement
      width={width}
      height={height ?? sizeConfig.titleHeight}
      shape="rect"
      blockClassName={`${prefixCls}__title`}
      className={className}
      style={style}
    />
  );
};

SkeletonTitle.displayName = 'SkeletonTitle';

export default SkeletonTitle;
