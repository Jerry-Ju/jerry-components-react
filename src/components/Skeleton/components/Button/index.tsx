import React from 'react';
import { classNames } from '@utils';
import { useSkeletonContext } from '../../context';
import type { SkeletonButtonProps, SkeletonButtonShape, SkeletonShape } from '../../types';
import { SkeletonElement } from '../Element';

const prefixCls = 'jerry-skeleton';

function resolveButtonShape(shape: SkeletonButtonShape): SkeletonShape {
  if (shape === 'circle') {
    return 'circle';
  }

  if (shape === 'round') {
    return 'round';
  }

  return 'rect';
}

/** 按钮占位，支持 shape 与 block */
export const SkeletonButton: React.FC<SkeletonButtonProps> = ({
  block = false,
  shape = 'default',
  width,
  height,
  className,
  style,
}) => {
  const { sizeConfig } = useSkeletonContext();
  const buttonHeight = height ?? sizeConfig.buttonHeight;
  const buttonWidth = block ? '100%' : (width ?? sizeConfig.buttonWidth);
  const isCircle = shape === 'circle';
  const elementWidth = isCircle ? buttonHeight : buttonWidth;

  return (
    <SkeletonElement
      width={elementWidth}
      height={buttonHeight}
      shape={resolveButtonShape(shape)}
      blockClassName={classNames(
        `${prefixCls}__button`,
        `${prefixCls}__button--${shape}`,
        block && `${prefixCls}__button--block`,
      )}
      className={className}
      style={style}
    />
  );
};

SkeletonButton.displayName = 'SkeletonButton';

export default SkeletonButton;
