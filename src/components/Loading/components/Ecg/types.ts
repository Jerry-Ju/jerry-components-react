import type { BaseComponentProps } from '@types';

export interface EcgLoadingProps extends BaseComponentProps {
  /** 线条颜色，默认主题粉 */
  color?: string;
  /** 容器宽度，数字视为 px，也可传 `100%` / `20rem` 等 CSS 长度，默认 220 */
  width?: number | string;
  /** 容器高度，数字视为 px，也可传 CSS 长度，默认 84 */
  height?: number | string;
  /** 扫描一圈耗时（秒），默认 5 */
  speed?: number;
  /** 线条粗细（SVG viewBox 单位），默认 4 */
  strokeWidth?: number;
}
