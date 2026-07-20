import React from 'react';
import { classNames } from '@utils';
import { buildIconTransform, ICONFONT_BASE_CLASS, normalizeIconType } from './constants';
import type { IconFontProps } from './types';
import './index.less';

const prefixCls = 'jerry-iconfont';

export const IconFont: React.FC<IconFontProps> = React.memo(
  ({
    type,
    rotate = 0,
    spin = false,
    flip = '',
    disabled = false,
    className,
    style,
    onClick,
  }) => {
    const iconClass = normalizeIconType(type);

    if (!iconClass) {
      return null;
    }

    const transform = buildIconTransform(rotate, flip, spin);
    const clickable = Boolean(onClick) && !disabled;

    return (
      <span
        className={classNames(
          prefixCls,
          spin && `${prefixCls}--spin`,
          flip === 'horizontal' && !spin && `${prefixCls}--flip-horizontal`,
          flip === 'vertical' && !spin && `${prefixCls}--flip-vertical`,
          disabled && `${prefixCls}--disabled`,
          clickable && `${prefixCls}--clickable`,
          className,
        )}
        style={{
          ...(transform ? { transform } : undefined),
          ...style,
        }}
        onClick={disabled ? undefined : onClick}
        aria-hidden="true"
      >
        <i className={classNames(ICONFONT_BASE_CLASS, iconClass)} />
      </span>
    );
  },
);

IconFont.displayName = 'IconFont';

export default IconFont;
