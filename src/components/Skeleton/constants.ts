import type { Size } from '@types';

/** 各 size 等级下的默认占位尺寸（px） */
export interface SkeletonSizeConfig {
  avatarSize: number;
  titleHeight: number;
  paragraphLineHeight: number;
  blockHeight: number;
  cardCoverHeight: number;
  detailCoverHeight: number;
}

export const SKELETON_SIZE_CONFIG: Record<Size, SkeletonSizeConfig> = {
  small: {
    avatarSize: 32,
    titleHeight: 14,
    paragraphLineHeight: 12,
    blockHeight: 24,
    cardCoverHeight: 120,
    detailCoverHeight: 160,
  },
  medium: {
    avatarSize: 40,
    titleHeight: 16,
    paragraphLineHeight: 14,
    blockHeight: 32,
    cardCoverHeight: 160,
    detailCoverHeight: 200,
  },
  large: {
    avatarSize: 48,
    titleHeight: 18,
    paragraphLineHeight: 16,
    blockHeight: 40,
    cardCoverHeight: 200,
    detailCoverHeight: 240,
  },
};

export function getSkeletonSizeConfig(size: Size = 'medium'): SkeletonSizeConfig {
  return SKELETON_SIZE_CONFIG[size];
}
