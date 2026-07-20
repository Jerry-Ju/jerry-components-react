import { mixColors } from '../Cube/utils';

/**
 * 将 colors 锚点插值扩展为 count 段，均匀覆盖整圈放射条。
 */
export function expandColorsToSegments(colors: string[], count: number): string[] {
  if (colors.length === 0) return [];
  if (colors.length === 1) return Array.from({ length: count }, () => colors[0]);

  const segments: string[] = [];

  for (let i = 0; i < count; i += 1) {
    const t = count === 1 ? 0 : i / (count - 1);
    const position = t * (colors.length - 1);
    const lower = Math.floor(position);
    const upper = Math.min(colors.length - 1, lower + 1);
    const ratio = position - lower;
    segments.push(mixColors(colors[lower], colors[upper], ratio));
  }

  return segments;
}
