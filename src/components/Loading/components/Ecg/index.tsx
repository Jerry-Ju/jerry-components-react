import { JayPink } from '@types';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { classNames } from '@utils';
import { ECG_PATH_D, ECG_PATH_LENGTH_FALLBACK, ECG_VIEW_BOX } from './constants';
import type { EcgLoadingProps } from './types';
import './index.less';

const prefixCls = 'jerry-loading-ecg';

function toCssSize(value: number | string | undefined, fallbackPx: number): string {
  if (value === undefined) return `${fallbackPx}px`;
  if (typeof value === 'number') return `${value}px`;
  return value;
}

export const EcgLoading: React.FC<EcgLoadingProps> = ({
  color = JayPink.base,
  width = 220,
  height = 84,
  speed = 5,
  strokeWidth = 4,
  className,
  style,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [dashLength, setDashLength] = useState(ECG_PATH_LENGTH_FALLBACK);

  useLayoutEffect(() => {
    if (pathRef.current) {
      setDashLength(Math.ceil(pathRef.current.getTotalLength()));
    }
  }, []);

  return (
    <div
      className={classNames(prefixCls, className)}
      style={
        {
          '--jerry-loading-ecg-width': toCssSize(width, 220),
          '--jerry-loading-ecg-height': toCssSize(height, 84),
          '--jerry-loading-ecg-color': color,
          '--jerry-loading-ecg-dasharray': dashLength,
          '--jerry-loading-ecg-speed': `${speed}s`,
          '--jerry-loading-ecg-stroke-width': strokeWidth,
          ...style,
        } as React.CSSProperties
      }
      role="status"
      aria-label="loading"
    >
      <svg className={`${prefixCls}__svg`} viewBox={ECG_VIEW_BOX} aria-hidden="true">
        <path
          ref={pathRef}
          className={`${prefixCls}__path`}
          d={ECG_PATH_D}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

EcgLoading.displayName = 'EcgLoading';

export default EcgLoading;
