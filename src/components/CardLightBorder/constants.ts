import { JayPink } from '@types';
import type { CardLightBorderSpeed } from './types';

export const DEFAULT_BORDER_WIDTH = 2;
export const DEFAULT_RADIUS = 8;
export const DEFAULT_FIXED_ANGLE = 0;

/** 未传 colors 时由 Less 回退主题主色；显式传入时的默认单色 */
export const DEFAULT_COLORS = [JayPink.base] as const;

export const SPEED_DURATION: Record<CardLightBorderSpeed, string> = {
  slow: '5s',
  default: '3s',
  fast: '1.5s',
};

const ARC_TRANSPARENT_END = 190;
const ARC_START = 225;
const ARC_END = 305;
const ARC_TRANSPARENT_START = 340;

/** 根据颜色数组生成 conic-gradient 色标（不含 from angle，便于 --jerry-clb-angle 动画生效） */
export function buildConicGradientStops(colors: string[]): string {
  const normalized = colors.map((item) => item.trim()).filter(Boolean);

  if (normalized.length === 0) {
    return '';
  }

  if (normalized.length === 1) {
    const [single] = normalized;
    return `transparent 0deg ${ARC_TRANSPARENT_END}deg, ${single} 250deg, ${single} 310deg, transparent ${ARC_TRANSPARENT_START}deg 360deg`;
  }

  const stops: string[] = [`transparent 0deg ${ARC_TRANSPARENT_END}deg`];

  normalized.forEach((color, index) => {
    const angle = ARC_START + ((ARC_END - ARC_START) * index) / (normalized.length - 1);
    stops.push(`${color} ${angle}deg`);
  });

  stops.push(`transparent ${ARC_TRANSPARENT_START}deg 360deg`);

  return stops.join(', ');
}
