import type { BaseComponentProps } from '@types';

export interface CradleLoadingProps extends BaseComponentProps {
  /** dot 数量，最少 3 */
  dots?: number;
  /** dot 颜色，默认主题色 */
  color?: string;
  /** 容器尺寸（px），默认 50 */
  size?: number;
  /** 动画速度（秒），默认 1.2 */
  speed?: number;
}
