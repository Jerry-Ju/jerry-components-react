/** 周杰伦应援品牌粉色系（固定基准，不随明暗主题改变） */
export const JayPink = {
  base: '#FFA6C9',
  dark: '#F27FB0',
  light: '#FFC8DD',
  p1: '#FFF0F7',
  p2: '#FFD8EB',
  p3: '#FFBFD9',
  p4: '#FFA6C9',
  p5: '#FF8EB9',
  p6: '#F27FB0',
  p7: '#D96899',
  p8: '#BF5082',
} as const;

export type ThemeMode = 'light' | 'dark';

/** 中性黑白灰基础体系（文字 / 背景 / 边框） */
export interface NeutralColorConfig {
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textPlaceholder: string;
  textDisabled: string;
  bgPage: string;
  bgCard: string;
  bgWeak: string;
  borderBase: string;
  borderWeak: string;
}

/** 品牌粉色强调色（按钮 / 高亮 / 激活态） */
export interface BrandColorConfig {
  primary: string;
  primaryHover: string;
  primaryBg: string;
}

export interface ThemeConfig extends NeutralColorConfig, BrandColorConfig {}

export const LightTheme: ThemeConfig = {
  textPrimary: '#111111',
  textSecondary: '#444444',
  textTertiary: '#666666',
  textPlaceholder: '#999999',
  textDisabled: '#bbbbbb',
  bgPage: '#ffffff',
  bgCard: '#fafafa',
  bgWeak: '#f5f5f5',
  borderBase: '#e5e5e5',
  borderWeak: '#f0f0f0',
  primary: JayPink.base,
  primaryHover: JayPink.dark,
  primaryBg: JayPink.p1,
};

export const DarkTheme: ThemeConfig = {
  textPrimary: '#ffffff',
  textSecondary: '#e5e5e5',
  textTertiary: '#bbbbbb',
  textPlaceholder: '#888888',
  textDisabled: '#555555',
  bgPage: '#121212',
  bgCard: '#1e1e1e',
  bgWeak: '#2a2a2a',
  borderBase: '#3a3a3a',
  borderWeak: '#2f2f2f',
  primary: '#ff98c1',
  primaryHover: '#f171a4',
  primaryBg: '#2c1723',
};

/** @deprecated 使用 JayPink.base */
export const JAY_PINK = JayPink.base;
/** @deprecated 使用 JayPink.dark */
export const JAY_PINK_DARK = JayPink.dark;
/** @deprecated 使用 JayPink.light */
export const JAY_PINK_LIGHT = JayPink.light;
/** 默认品牌强调色，等同 JayPink.base */
export const PRIMARY_COLOR = JayPink.base;

export const THEME_COLORS = {
  primary: JayPink.base,
  primaryDark: JayPink.dark,
  primaryLight: JayPink.light,
} as const;
