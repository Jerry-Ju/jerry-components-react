import React from 'react';
import { classNames } from '@utils';
import {
  SkeletonAvatar,
  SkeletonBlock,
  SkeletonParagraph,
  SkeletonTitle,
} from './components';
import { SkeletonContext } from './context';
import { getSkeletonSizeConfig } from './constants';
import type { SkeletonPresetConfig, SkeletonProps, SkeletonTemplateOptions } from './types';
import {
  containsSkeletonParts,
  hasExplicitPresetProps,
  renderPreset,
  renderTemplate,
} from './utils';
import './index.less';

const prefixCls = 'jerry-skeleton';

/**
 * 骨架屏根组件，支持三种用法：
 * 1. 包裹模式 — loading=false 时渲染 children 真实内容
 * 2. 模板模式 — template 快速生成 list / card / detail
 * 3. 自由组合 — children 内嵌 Skeleton.Avatar 等子组件
 */
export const Skeleton: React.FC<SkeletonProps> & {
  Avatar: typeof SkeletonAvatar;
  Title: typeof SkeletonTitle;
  Paragraph: typeof SkeletonParagraph;
  Block: typeof SkeletonBlock;
} = ({
  loading = true,
  active = true,
  size = 'medium',
  template,
  count = 1,
  rows = 3,
  avatar,
  title,
  paragraph,
  className,
  style,
  children,
}) => {
  const sizeConfig = getSkeletonSizeConfig(size);

  // 包裹模式：数据就绪后直接替换为真实内容
  if (!loading && children != null) {
    return <>{children}</>;
  }

  let content: React.ReactNode;

  // 渲染优先级：template > 显式 preset > 自由组合 > 包裹/独立默认 preset
  const presetOptions: SkeletonPresetConfig = {
    avatar: avatar ?? false,
    title: title ?? true,
    paragraph: paragraph ?? true,
    rows,
    sizeConfig,
  };
  const templateOptions: SkeletonTemplateOptions = {
    count,
    rows,
    avatar,
    title,
    paragraph,
    sizeConfig,
  };

  if (template) {
    content = renderTemplate(template, templateOptions);
  } else if (hasExplicitPresetProps({ avatar, title, paragraph } as SkeletonProps)) {
    content = renderPreset(presetOptions);
  } else if (children != null && containsSkeletonParts(children)) {
    // 自由组合：children 为 Skeleton 子节点布局
    content = children;
  } else if (children != null) {
    // 包裹模式 loading=true：忽略真实 children，渲染默认 preset
    content = renderPreset(presetOptions);
  } else {
    // 独立使用：<Skeleton /> 默认 title + paragraph
    content = renderPreset(presetOptions);
  }

  return (
    <SkeletonContext.Provider value={{ active, size, sizeConfig }}>
      <div
        className={classNames(prefixCls, `${prefixCls}--${size}`, className)}
        style={
          {
            // 波纹底色跟随深浅主题 CSS 变量
            '--jerry-skeleton-base': 'var(--bg-weak)',
            '--jerry-skeleton-highlight': 'var(--bg-card)',
            ...style,
          } as React.CSSProperties
        }
        aria-busy="true"
        aria-live="polite"
      >
        {content}
      </div>
    </SkeletonContext.Provider>
  );
};

Skeleton.Avatar = SkeletonAvatar;
Skeleton.Title = SkeletonTitle;
Skeleton.Paragraph = SkeletonParagraph;
Skeleton.Block = SkeletonBlock;
Skeleton.displayName = 'Skeleton';

export default Skeleton;
