import type { BaseComponentProps } from '@types';

export interface RingLoadingProps extends BaseComponentProps {
  /** 容器尺寸（px），默认 40 */
  size?: number;
  /** 进度弧颜色，默认主题粉 */
  color?: string;
  /** 轨道颜色，默认由 color 自动生成浅色 */
  trackColor?: string;
  /** 弧线占比 0~100，默认 25 */
  percent?: number;
  /** 线宽（px），默认 3 */
  strokeWidth?: number;
  /** 旋转一圈耗时（秒），默认 1 */
  speed?: number;
}
