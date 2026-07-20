import React from 'react';
import { classNames } from '@utils';
import { useSkeletonContext } from '../../context';
import type { SkeletonNodeProps } from '../../types';
import { SkeletonElement } from '../Element';

const prefixCls = 'jerry-skeleton';

/** 通用节点占位，可选中心图标装饰 */
export const SkeletonNode: React.FC<SkeletonNodeProps> = ({
  width,
  height,
  shape = 'rect',
  icon = false,
  className,
  style,
}) => {
  const { sizeConfig } = useSkeletonContext();
  const nodeWidth = width ?? sizeConfig.nodeSize;
  const nodeHeight = height ?? sizeConfig.nodeSize;

  return (
    <div
      className={classNames(`${prefixCls}__node`, className)}
      style={
        {
          width: typeof nodeWidth === 'number' ? `${nodeWidth}px` : nodeWidth,
          height: typeof nodeHeight === 'number' ? `${nodeHeight}px` : nodeHeight,
          ...style,
        } as React.CSSProperties
      }
    >
      <SkeletonElement
        width="100%"
        height="100%"
        shape={shape}
        blockClassName={`${prefixCls}__node-body`}
      />
      {icon && <span className={`${prefixCls}__node-icon`} aria-hidden="true" />}
    </div>
  );
};

SkeletonNode.displayName = 'SkeletonNode';

export default SkeletonNode;
