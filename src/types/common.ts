import type { CSSProperties } from 'react';

export type Size = 'small' | 'medium' | 'large';

export type Variant = 'primary' | 'default' | 'text';

export interface BaseComponentProps {
  className?: string;
  style?: CSSProperties;
}

export type { BaseComponentProps as IBaseComponentProps };
