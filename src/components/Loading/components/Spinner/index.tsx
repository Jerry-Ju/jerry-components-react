import { JayPink } from '@types';
import React, { useMemo } from 'react';
import { classNames } from '@utils';
import { SPINNER_BAR_COUNT, type SpinnerLoadingProps } from './types';
import { expandColorsToSegments } from './utils';
import './index.less';

const prefixCls = 'jerry-loading-spinner';

export const SpinnerLoading: React.FC<SpinnerLoadingProps> = ({
  speed = 1.2,
  color = JayPink.base,
  colors,
  size = 80,
  className,
  style,
}) => {
  const isGradientMode = colors != null && colors.length >= 2;

  const barColors = useMemo(() => {
    if (isGradientMode) {
      return expandColorsToSegments(colors, SPINNER_BAR_COUNT);
    }
    return Array.from({ length: SPINNER_BAR_COUNT }, () => color);
  }, [color, colors, isGradientMode]);

  const center = size / 2;
  const barWidth = size * 0.075;
  const barHeight = size * 0.225;
  const barTop = size * 0.0375;
  const barLeft = center - barWidth / 2;

  return (
    <div
      className={classNames(prefixCls, className)}
      style={
        {
          '--jerry-loading-spinner-size': `${size}px`,
          '--jerry-loading-spinner-center': `${center}px`,
          '--jerry-loading-spinner-bar-width': `${barWidth}px`,
          '--jerry-loading-spinner-bar-height': `${barHeight}px`,
          '--jerry-loading-spinner-bar-top': `${barTop}px`,
          '--jerry-loading-spinner-bar-left': `${barLeft}px`,
          '--jerry-loading-spinner-speed': `${speed}s`,
          ...style,
        } as React.CSSProperties
      }
      role="status"
      aria-label="loading"
    >
      {barColors.map((barColor, index) => (
        <div
          key={index}
          className={`${prefixCls}__bar`}
          style={
            {
              '--jerry-loading-spinner-rotate': `${index * (360 / SPINNER_BAR_COUNT)}deg`,
              '--jerry-loading-spinner-delay': `${-speed + ((index + 1) * speed) / SPINNER_BAR_COUNT}s`,
              '--jerry-loading-spinner-bar-color': barColor,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

SpinnerLoading.displayName = 'SpinnerLoading';

export default SpinnerLoading;
