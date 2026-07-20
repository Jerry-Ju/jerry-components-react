import React, { useMemo } from 'react';
import { classNames } from '@utils';
import { DEFAULT_BORDER_WIDTH, DEFAULT_RADIUS, SPEED_DURATION } from './constants';
import type { CardLightBorderProps, CardLightBorderStyle } from './types';
import './index.less';

const prefixCls = 'jerry-card-light-border';

function resolveContentRadius(radius: number | string, borderWidth: number): string {
  if (typeof radius === 'number') {
    return `${Math.max(0, radius - borderWidth)}px`;
  }

  return `calc(${radius} - ${borderWidth}px)`;
}

export const CardLightBorder: React.FC<CardLightBorderProps> = ({
  active = true,
  speed = 'default',
  color,
  borderWidth = DEFAULT_BORDER_WIDTH,
  radius = DEFAULT_RADIUS,
  className,
  style,
  children,
}) => {
  const mergedStyle = useMemo<CardLightBorderStyle>(() => {
    const radiusValue = typeof radius === 'number' ? `${radius}px` : radius;

    return {
      ...style,
      '--jerry-clb-border-width': `${borderWidth}px`,
      '--jerry-clb-radius': radiusValue,
      '--jerry-clb-content-radius': resolveContentRadius(radius, borderWidth),
      '--jerry-clb-duration': SPEED_DURATION[speed],
      ...(color ? { '--jerry-clb-color': color } : undefined),
    };
  }, [borderWidth, color, radius, speed, style]);

  return (
    <div
      className={classNames(prefixCls, `${prefixCls}--speed-${speed}`, className)}
      style={mergedStyle}
      data-border-active={active ? 'true' : 'false'}
    >
      {children}
    </div>
  );
};

CardLightBorder.displayName = 'CardLightBorder';

export default CardLightBorder;
