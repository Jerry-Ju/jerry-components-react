import type { BaseComponentProps } from '@types';

export interface ThreeBodyLoadingProps extends BaseComponentProps {
  /** 容器尺寸（px），默认 35 */
  size?: number;
  /** dot 颜色，默认主题色 */
  color?: string;
  /** 渐变色数组，大于 2 个时触发颜色循环渐变 */
  colors?: string[];
  /** 动画速度（秒），默认 0.8 */
  speed?: number;
}
