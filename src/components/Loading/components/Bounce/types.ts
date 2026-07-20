import type { BaseComponentProps } from '@types';

export interface BounceLoadingProps extends BaseComponentProps {
  /** dot 数量，最少 1，默认 3 */
  dots?: number;
  /** dot 颜色，默认主题粉 */
  color?: string;
  /** dot 直径（px），默认 20 */
  size?: number;
  /** dot 间距（px），默认等于 size */
  gap?: number;
  /** 单次跳动周期（秒），默认 0.5 */
  speed?: number;
}
