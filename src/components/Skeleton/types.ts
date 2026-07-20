import type { BaseComponentProps, Size } from '@types';
import type { ReactNode } from 'react';
import type { SkeletonSizeConfig } from './constants';

/** 占位块形状：矩形 / 正圆 / 圆角矩形 */
export type SkeletonShape = 'rect' | 'circle' | 'round';

/** 内置布局模板 */
export type SkeletonTemplate = 'list' | 'card' | 'detail';

export interface SkeletonElementProps extends BaseComponentProps {
  width?: number | string;
  height?: number | string;
  shape?: SkeletonShape;
}

export interface SkeletonAvatarProps extends BaseComponentProps {
  size?: number;
  shape?: 'circle' | 'square';
}

export interface SkeletonTitleProps extends SkeletonElementProps {
  width?: number | string;
}

export interface SkeletonParagraphProps extends BaseComponentProps {
  rows?: number;
  /** 每行宽度，不足时循环使用末项 */
  widths?: Array<number | string>;
}

export interface SkeletonBlockProps extends SkeletonElementProps {}

export type SkeletonButtonShape = 'default' | 'square' | 'round' | 'circle';

export interface SkeletonButtonProps extends BaseComponentProps {
  /** 块级占满容器宽度 */
  block?: boolean;
  shape?: SkeletonButtonShape;
  width?: number | string;
  height?: number;
}

export interface SkeletonInputProps extends BaseComponentProps {
  /** 块级占满容器宽度 */
  block?: boolean;
  width?: number | string;
  height?: number;
}

export interface SkeletonImageProps extends BaseComponentProps {
  width?: number | string;
  height?: number | string;
  /** 是否显示中心 SVG 图标 */
  icon?: boolean;
}

export interface SkeletonNodeProps extends SkeletonElementProps {
  /** 是否显示中心图标占位 */
  icon?: boolean;
}

export interface SkeletonProps extends BaseComponentProps {
  /** 是否展示骨架；false 且有 children 时渲染真实内容 */
  loading?: boolean;
  /** 是否启用波纹动画 */
  active?: boolean;
  /** 尺寸等级 */
  size?: Size;
  /** 全局圆角占位 */
  round?: boolean;
  /** 快速模板 */
  template?: SkeletonTemplate;
  /** 列表模板重复条数 */
  count?: number;
  /** 段落行数 */
  rows?: number;
  /** 头像占位；`false` 关闭，`true` 使用默认尺寸 */
  avatar?: boolean | SkeletonAvatarProps;
  /** 标题占位；`false` 关闭 */
  title?: boolean | SkeletonTitleProps;
  /** 段落占位；`false` 关闭 */
  paragraph?: boolean | SkeletonParagraphProps;
  /** 包裹模式传入真实内容；自由组合模式传入 Skeleton 子节点 */
  children?: ReactNode;
}

/** preset 渲染参数 */
export interface SkeletonPresetConfig {
  avatar: boolean | SkeletonAvatarProps;
  title: boolean | SkeletonTitleProps;
  paragraph: boolean | SkeletonParagraphProps;
  rows: number;
  sizeConfig: SkeletonSizeConfig;
}

/** 模板渲染参数 */
export interface SkeletonTemplateOptions
  extends Pick<SkeletonProps, 'count' | 'rows' | 'avatar' | 'title' | 'paragraph'> {
  sizeConfig: SkeletonSizeConfig;
}

/** 子组件共享的配置，由 Skeleton 根节点注入 */
export interface SkeletonContextValue {
  active: boolean;
  size: Size;
  sizeConfig: SkeletonSizeConfig;
}
