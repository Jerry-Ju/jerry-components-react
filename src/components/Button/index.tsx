import React from 'react';
import { classNames } from '@utils';
import type { ButtonProps } from './types';
import './index.less';

const prefixCls = 'jerry-btn';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className,
  style,
  children,
  htmlType = 'button',
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      {...rest}
      type={htmlType}
      className={classNames(
        prefixCls,
        `${prefixCls}--${variant}`,
        `${prefixCls}--${size}`,
        isDisabled && `${prefixCls}--disabled`,
        className,
      )}
      style={style}
      disabled={isDisabled}
    >
      {loading && <span className={`${prefixCls}__loading`} aria-hidden="true" />}
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
