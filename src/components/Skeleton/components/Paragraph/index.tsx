import React from 'react';
import { classNames } from '@utils';
import { useSkeletonContext } from '../../context';
import type { SkeletonParagraphProps } from '../../types';
import { SkeletonElement } from '../Element';

const prefixCls = 'jerry-skeleton';

/** 多行段落占位，行高跟随 Skeleton size */
export const SkeletonParagraph: React.FC<SkeletonParagraphProps> = ({
  rows = 3,
  widths,
  className,
  style,
}) => {
  const { sizeConfig } = useSkeletonContext();
  const rowWidths = widths ?? Array.from({ length: rows }, (_, index) => (index === rows - 1 ? '60%' : '100%'));

  return (
    <div className={classNames(`${prefixCls}__paragraph`, className)} style={style}>
      {Array.from({ length: rows }, (_, index) => {
        const rowWidth = rowWidths[index] ?? rowWidths[rowWidths.length - 1] ?? '100%';

        return (
          <SkeletonElement
            key={index}
            width={rowWidth}
            height={sizeConfig.paragraphLineHeight}
            shape="rect"
            blockClassName={`${prefixCls}__paragraph-line`}
          />
        );
      })}
    </div>
  );
};

SkeletonParagraph.displayName = 'SkeletonParagraph';

export default SkeletonParagraph;
