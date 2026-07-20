import React from 'react';
import { classNames } from '@utils';
import { useSkeletonContext } from '../../context';
import type { SkeletonElementProps, SkeletonShape } from '../../types';
import './index.less';

const prefixCls = 'jerry-skeleton';

export interface SkeletonElementComponentProps extends SkeletonElementProps {
  /** 子组件语义类名，如 __avatar / __title */
  blockClassName?: string;
}

/** 最小占位单元，通过 Context 继承父级 active 控制波纹 */
export const SkeletonElement: React.FC<SkeletonElementComponentProps> = ({
  width,
  height = 16,
  shape = 'rect',
  className,
  blockClassName,
  style,
}) => {
  const { active } = useSkeletonContext();

  const dimensionStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...style,
  };

  return (
    <div
      className={classNames(
        `${prefixCls}__element`,
        `${prefixCls}__element--${shape as SkeletonShape}`,
        active && `${prefixCls}__element--active`,
        blockClassName,
        className,
      )}
      style={dimensionStyle}
    />
  );
};

SkeletonElement.displayName = 'SkeletonElement';

export default SkeletonElement;
