import type { BaseComponentProps } from '@types';
import type { MouseEventHandler } from 'react';

/** 当前 iconfont 项目内置图标名（来自 download/iconfont.json） */
export type IconFontType =
  | 'line_chart_down'
  | 'trending_up'
  | 'bar_chart_horizontal'
  | 'bar_chart_alt_horizontal'
  | 'doughnut_chart'
  | 'negative-dynamics'
  | 'pie_chart_75'
  | 'curve_chart_down'
  | 'trending_down'
  | 'pie_chart_50'
  | 'pie_chart_25'
  | 'bar_chart'
  | 'data'
  | 'positive-dynamics'
  | 'curve_chart_up'
  | 'bar_chart_square'
  | 'form'
  | 'bar_chart_alt'
  | 'line_chart_up'
  | 'pie_chart_outline'
  | 'pie_chart_outline_acute'
  | 'pie_chart_outline_right'
  | 'pie_chart_outline_obtuse';

export type IconFontFlip = 'horizontal' | 'vertical' | '';

export interface IconFontProps extends BaseComponentProps {
  /** FontClass 名称，如 line_chart_down 或 icon-line_chart_down */
  type?: IconFontType | string;
  /** 旋转角度 0~360，spin 为 true 时不生效 */
  rotate?: number;
  /** 无限旋转动画 */
  spin?: boolean;
  /** 翻转方向 */
  flip?: IconFontFlip;
  /** 禁用态 */
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}
