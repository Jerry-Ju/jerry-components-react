import type { CardLightBorderSpeed } from './types';

export const DEFAULT_BORDER_WIDTH = 2;
export const DEFAULT_RADIUS = 8;

export const SPEED_DURATION: Record<CardLightBorderSpeed, string> = {
  slow: '5s',
  default: '3s',
  fast: '1.5s',
};
