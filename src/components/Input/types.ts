import type { BaseComponentProps, Size } from '@types';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** 输入框尺寸 */
  size?: Size;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 前缀内容 */
  prefix?: ReactNode;
  /** 后缀内容 */
  suffix?: ReactNode;
  /** 占位符 */
  placeholder?: string;
}
