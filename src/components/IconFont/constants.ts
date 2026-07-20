/** 阿里 iconfont FontClass 前缀 */
export const ICONFONT_CLASS_PREFIX = 'icon-';

/** iconfont 基础类名（阿里标准） */
export const ICONFONT_BASE_CLASS = 'iconfont';

export function normalizeIconType(type?: string): string | null {
  if (!type?.trim()) {
    return null;
  }

  const trimmed = type.trim();

  if (trimmed.startsWith(ICONFONT_CLASS_PREFIX)) {
    return trimmed;
  }

  return `${ICONFONT_CLASS_PREFIX}${trimmed}`;
}

export function buildIconTransform(rotate: number, flip: '' | 'horizontal' | 'vertical', spin: boolean): string | undefined {
  if (spin) {
    return undefined;
  }

  const transforms: string[] = [];

  if (rotate) {
    transforms.push(`rotate(${rotate}deg)`);
  }

  if (flip === 'horizontal') {
    transforms.push('scaleX(-1)');
  }

  if (flip === 'vertical') {
    transforms.push('scaleY(-1)');
  }

  return transforms.length > 0 ? transforms.join(' ') : undefined;
}
