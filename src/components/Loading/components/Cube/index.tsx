import { JayPink } from '@types';
import React, { useId, useMemo } from 'react';
import { classNames } from '@utils';
import type { CubeLoadingProps } from './types';
import { buildCubeColorKeyframes, colorWithAlpha } from './utils';
import './index.less';

const prefixCls = 'jerry-loading-cube';

export const CubeLoading: React.FC<CubeLoadingProps> = ({
  size = 70,
  color = JayPink.base,
  colors,
  alpha = 0.1,
  speed = 1.6,
  className,
  style,
}) => {
  const animationId = useId().replace(/:/g, '');
  const borderAnimationName = `jerry-loading-cube-border-${animationId}`;

  const { borderColor, borderKeyframes, hasGradient } = useMemo(() => {
    const resolvedColors = colors && colors.length > 0 ? colors : [color];
    const gradient = resolvedColors.length >= 2;
    const keyframes = gradient
      ? buildCubeColorKeyframes(resolvedColors, borderAnimationName, alpha)
      : '';

    return {
      borderColor: resolvedColors[0],
      borderKeyframes: keyframes,
      hasGradient: gradient,
    };
  }, [alpha, borderAnimationName, color, colors]);

  return (
    <>
      {borderKeyframes ? <style>{borderKeyframes}</style> : null}
      <div
        className={classNames(`${prefixCls}-wrapper`, className)}
        style={
          {
            '--jerry-loading-cube-size': `${size}px`,
            ...style,
          } as React.CSSProperties
        }
        role="status"
        aria-label="loading"
      >
        <div
          className={classNames(prefixCls, hasGradient && `${prefixCls}--gradient`)}
          style={
            {
              '--jerry-loading-cube-size': `${size}px`,
              '--jerry-loading-cube-speed': `${speed}s`,
              ...(!hasGradient && {
                '--jerry-loading-cube-face': colorWithAlpha(borderColor, alpha),
              }),
              '--jerry-loading-cube-border': borderColor,
              '--jerry-loading-cube-border-animation': borderAnimationName,
            } as React.CSSProperties
          }
        >
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={`${prefixCls}__face`} />
          ))}
        </div>
      </div>
    </>
  );
};

CubeLoading.displayName = 'CubeLoading';

export default CubeLoading;
