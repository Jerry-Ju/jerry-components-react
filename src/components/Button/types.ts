import type { BaseComponentProps, Size, Variant } from '@types';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps
  extends BaseComponentProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** 按钮类型 */
  variant?: Variant;
  /** 按钮尺寸 */
  size?: Size;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 按钮内容 */
  children?: ReactNode;
  /** 原生 button type */
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}
