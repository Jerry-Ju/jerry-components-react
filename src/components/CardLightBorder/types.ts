import type { BaseComponentProps } from '@types';
import type { CSSProperties, ReactNode } from 'react';

export type CardLightBorderSpeed = 'slow' | 'default' | 'fast';

/** 流光触发模式：hover / 常驻 / 关闭 */
export type CardLightBorderTrigger = 'hover' | 'always' | 'none';

/** 流光旋转方向 */
export type CardLightBorderDirection = 'clockwise' | 'counterclockwise';

/** 边框状态：默认 / 聚焦 / 选中 */
export type CardLightBorderState = 'default' | 'focus' | 'selected';

export interface CardLightBorderProps extends BaseComponentProps {
  /** 触发模式：hover 移入 / always 常驻 / none 关闭 */
  trigger?: CardLightBorderTrigger;
  /** 旋转方向 */
  direction?: CardLightBorderDirection;
  /** 边框状态 */
  state?: CardLightBorderState;
  /** 动画速度档位 */
  speed?: CardLightBorderSpeed;
  /**
   * 流光颜色数组
   * - 长度 1：单色模式
   * - 长度 ≥ 2：渐变色模式，数组内颜色沿弧带平滑过渡（可传彩虹色）
   * - 不传：跟随主题 `--color-primary`
   */
  colors?: string[];
  /** 固定亮带角度（0~360），配合 state='focus' | 'selected' 停止旋转 */
  fixedAngle?: number;
  /** 流光边框粗细（px） */
  borderWidth?: number;
  /** 卡片圆角，数字视为 px */
  radius?: number | string;
  /** 基础边框环带颜色，不传默认 `@border-base` */
  cardBorder?: string;
  children?: ReactNode;
}

export type CardLightBorderStyle = CSSProperties & {
  '--jerry-clb-border-width'?: string;
  '--jerry-clb-radius'?: string;
  '--jerry-clb-content-radius'?: string;
  '--jerry-clb-stops'?: string;
  '--jerry-clb-card-border'?: string;
  '--jerry-clb-duration'?: string;
  '--jerry-clb-fixed-angle'?: string;
};
