import type { BaseComponentProps } from '@types';

export interface CubeLoadingProps extends BaseComponentProps {
  /** 立方体尺寸（px），默认 70 */
  size?: number;
  /** 面填充色（会自动转为透明色），默认主题色 */
  color?: string;
  /** border 渐变主题色，2 个及以上时循环自然过渡 */
  colors?: string[];
  /** 面透明度，默认 0.1 */
  alpha?: number;
  /** 动画周期（秒），默认 1.6 */
  speed?: number;
}
