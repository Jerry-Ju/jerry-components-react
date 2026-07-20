import React from 'react';
import { classNames } from '@utils';
import type { InputProps } from './types';
import './index.less';

const prefixCls = 'jerry-input';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'medium',
      disabled = false,
      readOnly = false,
      prefix,
      suffix,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    return (
      <span
        className={classNames(
          prefixCls,
          `${prefixCls}--${size}`,
          disabled && `${prefixCls}--disabled`,
          className,
        )}
        style={style}
      >
        {prefix && (
          <span className={classNames(`${prefixCls}__affix`, `${prefixCls}__affix--prefix`)}>
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={`${prefixCls}__field`}
          disabled={disabled}
          readOnly={readOnly}
          {...rest}
        />
        {suffix && (
          <span className={classNames(`${prefixCls}__affix`, `${prefixCls}__affix--suffix`)}>
            {suffix}
          </span>
        )}
      </span>
    );
  },
);

Input.displayName = 'Input';

export default Input;
