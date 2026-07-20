import { JayPink } from '@types';
import React from 'react';
import { classNames } from '@utils';
import type { RingLoadingProps } from './types';
import './index.less';

const prefixCls = 'jerry-loading-ring';

export const RingLoading: React.FC<RingLoadingProps> = ({
  size = 40,
  color = JayPink.base,
  trackColor,
  percent = 25,
  strokeWidth = 5,
  speed = 1,
  className,
  style,
}) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const arcLength = (clampedPercent / 100) * circumference;

  return (
    <div
      className={classNames(prefixCls, className)}
      style={
        {
          '--jerry-loading-ring-size': `${size}px`,
          '--jerry-loading-ring-color': color,
          '--jerry-loading-ring-track':
            trackColor ?? `color-mix(in srgb, ${color} 25%, transparent)`,
          '--jerry-loading-ring-speed': `${speed}s`,
          ...style,
        } as React.CSSProperties
      }
      role="status"
      aria-label="loading"
    >
      <svg
        className={`${prefixCls}__svg`}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        aria-hidden="true"
      >
        <circle
          className={`${prefixCls}__track`}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <circle
          className={`${prefixCls}__arc`}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference - arcLength}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
    </div>
  );
};

RingLoading.displayName = 'RingLoading';

export default RingLoading;
