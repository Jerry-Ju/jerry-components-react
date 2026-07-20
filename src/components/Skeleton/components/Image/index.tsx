import React from 'react';
import { classNames } from '@utils';
import { useSkeletonContext } from '../../context';
import type { SkeletonImageProps } from '../../types';
import { SkeletonElement } from '../Element';
import { ImagePlaceholderIcon } from './ImagePlaceholderIcon';

const prefixCls = 'jerry-skeleton';

/** 图片占位，可选中心 SVG 图标 */
export const SkeletonImage: React.FC<SkeletonImageProps> = ({
  width,
  height,
  icon = true,
  className,
  style,
}) => {
  const { sizeConfig } = useSkeletonContext();
  const imageWidth = width ?? sizeConfig.imageSize;
  const imageHeight = height ?? sizeConfig.imageSize;

  return (
    <div
      className={classNames(`${prefixCls}__image`, className)}
      style={
        {
          width: typeof imageWidth === 'number' ? `${imageWidth}px` : imageWidth,
          height: typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight,
          ...style,
        } as React.CSSProperties
      }
    >
      <SkeletonElement
        width="100%"
        height="100%"
        shape="rect"
        blockClassName={`${prefixCls}__image-body`}
      />
      {icon && (
        <span className={`${prefixCls}__image-icon`} aria-hidden="true">
          <ImagePlaceholderIcon className={`${prefixCls}__image-svg`} />
        </span>
      )}
    </div>
  );
};

SkeletonImage.displayName = 'SkeletonImage';

export default SkeletonImage;
