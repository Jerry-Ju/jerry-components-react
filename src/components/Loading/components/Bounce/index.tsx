import { JayPink } from '@types';
import React from 'react';
import { classNames } from '@utils';
import { colorWithAlpha } from '../Cube/utils';
import type { BounceLoadingProps } from './types';
import './index.less';

const prefixCls = 'jerry-loading-bounce';

export const BounceLoading: React.FC<BounceLoadingProps> = ({
  dots = 3,
  color = JayPink.base,
  size = 20,
  gap,
  speed = 0.5,
  className,
  style,
}) => {
  const dotCount = Math.max(1, dots);
  const resolvedGap = gap ?? size;
  const shadowColor = colorWithAlpha(color, 0.25);

  return (
    <div
      className={classNames(prefixCls, className)}
      style={
        {
          '--jerry-loading-bounce-size': `${size}px`,
          '--jerry-loading-bounce-gap': `${resolvedGap}px`,
          '--jerry-loading-bounce-color': color,
          '--jerry-loading-bounce-shadow': shadowColor,
          '--jerry-loading-bounce-speed': `${speed}s`,
          '--jerry-loading-bounce-height': `${size * 3}px`,
          ...style,
        } as React.CSSProperties
      }
      role="status"
      aria-label="loading"
    >
      {Array.from({ length: dotCount }, (_, index) => (
        <div
          key={index}
          className={`${prefixCls}__item`}
          style={
            {
              '--jerry-loading-bounce-delay': `${index * speed * 0.4}s`,
            } as React.CSSProperties
          }
        >
          <div className={`${prefixCls}__dot`} />
          <div className={`${prefixCls}__shadow`} />
        </div>
      ))}
    </div>
  );
};

BounceLoading.displayName = 'BounceLoading';

export default BounceLoading;
