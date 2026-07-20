import React, { useMemo } from 'react';
import { classNames } from '@utils';
import {
  buildConicGradientStops,
  DEFAULT_BORDER_WIDTH,
  DEFAULT_FIXED_ANGLE,
  DEFAULT_RADIUS,
  SPEED_DURATION,
} from './constants';
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
  trigger = 'hover',
  direction = 'clockwise',
  state = 'default',
  speed = 'default',
  colors,
  fixedAngle,
  borderWidth = DEFAULT_BORDER_WIDTH,
  radius = DEFAULT_RADIUS,
  cardBorder,
  className,
  style,
  children,
}) => {
  const isFixed = state !== 'default' && fixedAngle !== undefined;
  const gradientStops = colors?.length ? buildConicGradientStops(colors) : undefined;

  const mergedStyle = useMemo<CardLightBorderStyle>(() => {
    const radiusValue = typeof radius === 'number' ? `${radius}px` : radius;

    return {
      ...style,
      '--jerry-clb-border-width': `${borderWidth}px`,
      '--jerry-clb-radius': radiusValue,
      '--jerry-clb-content-radius': resolveContentRadius(radius, borderWidth),
      '--jerry-clb-duration': SPEED_DURATION[speed],
      '--jerry-clb-fixed-angle': `${fixedAngle ?? DEFAULT_FIXED_ANGLE}deg`,
      ...(cardBorder !== undefined ? { '--jerry-clb-card-border': cardBorder } : undefined),
      ...(gradientStops ? { '--jerry-clb-stops': gradientStops } : undefined),
    };
  }, [borderWidth, cardBorder, fixedAngle, gradientStops, radius, speed, style]);

  return (
    <div
      className={classNames(prefixCls, `${prefixCls}--speed-${speed}`, className)}
      style={mergedStyle}
      data-border-trigger={trigger}
      data-border-direction={direction}
      data-border-state={state}
      data-border-fixed={isFixed ? 'true' : 'false'}
      tabIndex={state === 'focus' ? 0 : undefined}
    >
      {children}
    </div>
  );
};

CardLightBorder.displayName = 'CardLightBorder';

export default CardLightBorder;
