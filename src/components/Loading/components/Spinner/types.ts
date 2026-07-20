import type { BaseComponentProps } from '@types';

export interface SpinnerLoadingProps extends BaseComponentProps {
  /** 旋转周期（秒），默认 1.2 */
  speed?: number;
  /** 单色模式颜色，默认主题粉 */
  color?: string;
  /** 多色渐变，length >= 2 时启用 */
  colors?: string[];
  /** 直径（px），默认 80 */
  size?: number;
}

/** 放射条数量（与 demo 一致） */
export const SPINNER_BAR_COUNT = 12;
