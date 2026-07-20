import { JayPink } from '@types';
import React, { useId, useMemo } from 'react';
import { classNames } from '@utils';
import type { ThreeBodyLoadingProps } from './types';
import { buildBackgroundColorKeyframes } from '../Cube/utils';
import './index.less';

const prefixCls = 'jerry-loading-three-body';

export const ThreeBodyLoading: React.FC<ThreeBodyLoadingProps> = ({
  size = 35,
  color = JayPink.base,
  colors,
  speed = 0.8,
  className,
  style,
}) => {
  const animationId = useId().replace(/:/g, '');
  const colorAnimationName = `jerry-loading-three-body-color-${animationId}`;

  const { dotColor, colorKeyframes, hasGradient } = useMemo(() => {
    const resolvedColors = colors && colors.length > 0 ? colors : [color];
    const gradient = resolvedColors.length > 2;
    const keyframes = gradient
      ? buildBackgroundColorKeyframes(resolvedColors, colorAnimationName)
      : '';

    return {
      dotColor: resolvedColors[0],
      colorKeyframes: keyframes,
      hasGradient: gradient,
    };
  }, [color, colorAnimationName, colors]);

  return (
    <>
      {colorKeyframes ? <style>{colorKeyframes}</style> : null}
      <div
        className={classNames(prefixCls, hasGradient && `${prefixCls}--gradient`, className)}
        style={
          {
            '--jerry-loading-three-body-size': `${size}px`,
            '--jerry-loading-three-body-speed': `${speed}s`,
            '--jerry-loading-three-body-color': dotColor,
            '--jerry-loading-three-body-color-animation': colorAnimationName,
            ...style,
          } as React.CSSProperties
        }
        role="status"
        aria-label="loading"
      >
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className={`${prefixCls}__dot`} />
        ))}
      </div>
    </>
  );
};

ThreeBodyLoading.displayName = 'ThreeBodyLoading';

export default ThreeBodyLoading;
