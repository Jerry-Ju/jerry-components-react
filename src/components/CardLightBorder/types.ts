import type { BaseComponentProps } from '@types';
import type { CSSProperties, ReactNode } from 'react';

export type CardLightBorderSpeed = 'slow' | 'default' | 'fast';

export interface CardLightBorderProps extends BaseComponentProps {
  /** 是否开启 hover 流光动效 */
  active?: boolean;
  /** 动画速度档位 */
  speed?: CardLightBorderSpeed;
  /** 流光高亮色，默认跟随主题主色 */
  color?: string;
  /** 流光边框粗细（px） */
  borderWidth?: number;
  /** 卡片圆角，数字视为 px */
  radius?: number | string;
  children?: ReactNode;
}

export type CardLightBorderStyle = CSSProperties & {
  '--jerry-clb-border-width'?: string;
  '--jerry-clb-radius'?: string;
  '--jerry-clb-content-radius'?: string;
  '--jerry-clb-color'?: string;
  '--jerry-clb-duration'?: string;
};
