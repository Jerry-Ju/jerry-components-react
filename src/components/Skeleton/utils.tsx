import React from 'react';
import { SkeletonAvatar, SkeletonBlock, SkeletonParagraph, SkeletonTitle } from './components';
import type {
  SkeletonPresetConfig,
  SkeletonProps,
  SkeletonTemplate,
  SkeletonTemplateOptions,
} from './types';

const prefixCls = 'jerry-skeleton';

/**
 * 归一化 boolean | 配置对象：
 * - `false` → 关闭该占位
 * - `true` / `undefined` → 使用 defaults
 * - 对象 → 与 defaults 合并
 */
function normalizeProp<T>(
  prop: boolean | T | undefined,
  defaults: T,
): T | false {
  if (prop === false) {
    return false;
  }

  if (prop === true || prop === undefined) {
    return defaults;
  }

  return { ...defaults, ...prop };
}

/** 按 avatar + title + paragraph 组合渲染标准骨架布局 */
export function renderPreset({
  avatar,
  title,
  paragraph,
  rows,
  sizeConfig,
}: SkeletonPresetConfig): React.ReactNode {
  const avatarProps = normalizeProp(avatar, { size: sizeConfig.avatarSize, shape: 'circle' as const });
  const titleProps = normalizeProp(title, { width: '38%' });
  const paragraphProps = normalizeProp(paragraph, { rows });

  const showAvatar = avatarProps !== false;
  const showTitle = titleProps !== false;
  const showParagraph = paragraphProps !== false;

  const content = (
    <>
      {showTitle && <SkeletonTitle {...titleProps} />}
      {showParagraph && <SkeletonParagraph {...paragraphProps} />}
    </>
  );

  if (!showAvatar) {
    return <div className={`${prefixCls}__content`}>{content}</div>;
  }

  return (
    <div className={`${prefixCls}__item`}>
      <SkeletonAvatar {...avatarProps} />
      <div className={`${prefixCls}__content`}>{content}</div>
    </div>
  );
}

/** 渲染 list / card / detail 内置模板 */
export function renderTemplate(
  template: SkeletonTemplate,
  options: SkeletonTemplateOptions,
): React.ReactNode {
  const { count = 1, rows = 3, avatar, title, paragraph, sizeConfig } = options;

  if (template === 'list') {
    return Array.from({ length: count }, (_, index) => (
      <div key={index} className={`${prefixCls}__list-item`}>
        {renderPreset({
          avatar: avatar ?? true,
          title: title ?? true,
          paragraph: paragraph ?? { rows: 2 },
          rows: 2,
          sizeConfig,
        })}
      </div>
    ));
  }

  if (template === 'card') {
    return (
      <div className={`${prefixCls}__card`}>
        <SkeletonBlock width="100%" height={sizeConfig.cardCoverHeight} shape="round" />
        {renderPreset({
          avatar: false,
          title: title ?? true,
          paragraph: paragraph ?? { rows: 2 },
          rows: 2,
          sizeConfig,
        })}
      </div>
    );
  }

  return (
    <div className={`${prefixCls}__detail`}>
      {renderPreset({
        avatar: false,
        title: title ?? { width: '60%' },
        paragraph: paragraph ?? { rows },
        rows,
        sizeConfig,
      })}
      <SkeletonBlock width="100%" height={sizeConfig.detailCoverHeight} shape="round" />
    </div>
  );
}

/** 子组件 displayName 集合，用于识别自由组合模式 */
const SKELETON_PART_NAMES = new Set([
  'SkeletonAvatar',
  'SkeletonTitle',
  'SkeletonParagraph',
  'SkeletonBlock',
  'SkeletonElement',
]);

/**
 * 递归检测 children 是否包含 Skeleton 子组件。
 * 有 → 自由组合模式；无 → 包裹模式（children 为真实内容，loading 时渲染默认 preset）。
 */
export function containsSkeletonParts(node: React.ReactNode): boolean {
  let found = false;

  React.Children.forEach(node, (child) => {
    if (found || !React.isValidElement(child)) {
      return;
    }

    const displayName = (child.type as { displayName?: string }).displayName;
    if (displayName && SKELETON_PART_NAMES.has(displayName)) {
      found = true;
      return;
    }

    if (child.props && typeof child.props === 'object' && 'children' in child.props) {
      found = containsSkeletonParts(child.props.children as React.ReactNode);
    }
  });

  return found;
}

/** 是否显式传入了 avatar / title / paragraph，用于区分包裹 preset 与自由组合 */
export function hasExplicitPresetProps(props: SkeletonProps): boolean {
  return props.avatar !== undefined || props.title !== undefined || props.paragraph !== undefined;
}
