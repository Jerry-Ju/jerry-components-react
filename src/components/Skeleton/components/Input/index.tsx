import React from 'react';
import { classNames } from '@utils';
import { useSkeletonContext } from '../../context';
import type { SkeletonInputProps } from '../../types';
import { SkeletonElement } from '../Element';

const prefixCls = 'jerry-skeleton';

/** 输入框占位，支持 block */
export const SkeletonInput: React.FC<SkeletonInputProps> = ({
  block = false,
  width,
  height,
  className,
  style,
}) => {
  const { sizeConfig } = useSkeletonContext();
  const inputHeight = height ?? sizeConfig.inputHeight;
  const inputWidth = block ? '100%' : (width ?? sizeConfig.inputWidth);

  return (
    <SkeletonElement
      width={inputWidth}
      height={inputHeight}
      shape="rect"
      blockClassName={classNames(`${prefixCls}__input`, block && `${prefixCls}__input--block`)}
      className={className}
      style={style}
    />
  );
};

SkeletonInput.displayName = 'SkeletonInput';

export default SkeletonInput;
