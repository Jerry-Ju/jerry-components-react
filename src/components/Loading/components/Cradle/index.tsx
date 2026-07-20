import { JayPink } from '@types';
import React from 'react';
import { classNames } from '@utils';
import type { CradleLoadingProps } from './types';
import './index.less';

const prefixCls = 'jerry-loading-cradle';

export const CradleLoading: React.FC<CradleLoadingProps> = ({
  dots = 3,
  color = JayPink.base,
  size,
  speed,
  className,
  style,
}) => {
  const dotCount = Math.max(3, dots);

  return (
    <div
      className={classNames(prefixCls, className)}
      style={
        {
          '--jerry-loading-cradle-dots': dotCount,
          '--jerry-loading-cradle-color': color,
          '--jerry-loading-cradle-size': size !== undefined ? `${size}px` : undefined,
          '--jerry-loading-cradle-speed': speed !== undefined ? `${speed}s` : undefined,
          ...style,
        } as React.CSSProperties
      }
      role="status"
      aria-label="loading"
    >
      {Array.from({ length: dotCount }, (_, index) => (
        <div key={index} className={`${prefixCls}__dot`} />
      ))}
    </div>
  );
};

CradleLoading.displayName = 'CradleLoading';

export default CradleLoading;
