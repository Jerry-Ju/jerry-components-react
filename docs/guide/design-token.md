---
title: Design Token
order: 3
---

# Design Token 规范

本文档为 Jerry Components React 全局基础 Design Token，统一所有组件（Button / Card / Skeleton / IconFont / Input / CardLightBorder 等）的视觉基础规则，解决组件样式不统一、尺寸混乱、层级错乱问题。

所有组件**禁止写死固定数值**，全部引用全局 Less 变量，支持一键换主题、换尺寸体系。规范对标 Ant Design / Arco Design 工业级标准，轻量化、极简、高适配。

> 主题色（Jay Pink 品牌粉）与中性色 CSS 变量详见 [主题定制](/guide/theme)。

## 1. 基础栅格间距系统

**基准单位：4px**（所有间距均为 4 的倍数）

| 等级 | 变量 | 数值 | 适用场景 |
| --- | --- | --- | --- |
| xs | `@spacing-xs` | 4px | 极小间距、标题与段落间距、小偏移 |
| sm | `@spacing-sm` | 8px | 组件内小幅间距、图标与文字间距 |
| md | `@spacing-md` | 12px | 常规组件内边距、模块间距（最常用） |
| lg | `@spacing-lg` | 16px | 卡片内边距、区块间距 |
| xl | `@spacing-xl` | 24px | 大模块间距、页面区块间距 |
| xxl | `@spacing-xxl` | 32px | 页面大留白、卡片整体间距 |

## 2. 统一圆角体系

遵循：小控件小圆角、大卡片大圆角、弹窗最大圆角。

| 等级 | 变量 | 数值 | 适用组件 |
| --- | --- | --- | --- |
| xs | `@radius-xs` | 2px | 标签、小字标、focus 环 |
| sm | `@radius-sm` | 4px | 按钮、输入框、下拉、小型控件 |
| md | `@radius-md` | 6px | 常规卡片、Cell、条目模块 |
| lg | `@radius-lg` | 8px | 大卡片、内容区块、CardLightBorder 默认圆角 |
| xl | `@radius-xl` | 12px | 弹窗 Modal、大面板 |
| round | `@radius-round` | 999px | 圆形按钮、胶囊标签、头像 |

兼容旧名：`@border-radius-sm` = `@radius-sm`，`@border-radius-md` = `@radius-md`，`@border-radius-lg` = `@radius-lg`。

## 3. 字体层级体系

| 层级 | 变量 | 字号 | 行高 | 字重 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| text-xs | `@font-xs` | 12px | 1.4 | 400 | 辅助文字、备注、时间 |
| text-sm | `@font-sm` | 13px | 1.5 | 400 | 列表内容、常规描述 |
| text-md | `@font-md` | 14px | 1.6 | 400 | 全局默认正文、按钮文字 |
| text-lg | `@font-lg` | 16px | 1.6 | 500 | 卡片标题、模块小标题 |
| text-xl | `@font-xl` | 18px | 1.7 | 600 | 弹窗标题、区块大标题 |
| text-xxl | `@font-xxl` | 20px | 1.8 | 600 | 页面主标题 |

Less mixin：`.text-xs()` ~ `.text-xxl()`（定义于 `src/styles/mixins.less`）。

兼容旧名：`@font-size-sm` = `@font-xs`，`@font-size-md` = `@font-md`，`@font-size-lg` = `@font-lg`。

## 4. 统一内外边距 Padding / Margin

### 4.1 组件 Padding（内部留白）

| 场景 | Token | 数值 |
| --- | --- | --- |
| 小控件（按钮/输入框） | `@padding-control-sm` | 8px 12px |
| 常规卡片模块 | `@padding-card` | 16px |
| 大卡片/弹窗内容 | `@padding-modal` | 24px |
| 列表项 Cell | — | 上下 12px / 左右 16px（`@spacing-md` `@spacing-lg`） |

### 4.2 页面 Margin（外部间距）

- 组件与组件间距：`@spacing-md`（12px）或 `@spacing-lg`（16px）
- 模块与模块间距：`@spacing-xl`（24px）
- 页面最外层留白：`@spacing-xl`（24px）

## 5. 阴影层级规范

层级越高、阴影越宽、越透明。

| 层级 | 变量 | 阴影值 | 适用场景 |
| --- | --- | --- | --- |
| none | `@shadow-none` | none | 无阴影扁平组件 |
| sm | `@shadow-sm` | 0 1px 2px rgba(0,0,0,0.06) | 默认静态卡片 |
| md | `@shadow-md` | 0 2px 8px rgba(0,0,0,0.08) | hover 悬浮、按钮悬浮 |
| lg | `@shadow-lg` | 0 4px 16px rgba(0,0,0,0.1) | 卡片 hover 增强、下拉菜单 |
| xl | `@shadow-xl` | 0 8px 24px rgba(0,0,0,0.12) | Modal、顶层悬浮层 |

hover 梯度增强 mixin：`.shadow-hover(@from, @to)`。

## 6. Z-index 全局层级

| 模块 | 变量 | 值 |
| --- | --- | --- |
| 普通页面内容 | `@z-content` | 1 |
| 卡片悬浮、流光 border | `@z-card-hover` | 10 |
| 下拉、气泡、提示 | `@z-dropdown` | 100 |
| Modal 弹窗 | `@z-modal` | 1000 |
| Loading 全局遮罩 | `@z-loading` | 2000 |
| 全局 Toast | `@z-toast` | 3000 |

## 7. 主题基础色规范

中性色与品牌粉详见 [主题定制](/guide/theme)。摘要如下：

### 7.1 文本色

- `@text-primary` — 主要正文
- `@text-secondary` — 次要文字
- `@text-placeholder` — 占位文字
- `@text-disabled` — 禁用文字

### 7.2 背景色

- `@bg-page` — 页面背景
- `@bg-card` — 卡片白底
- `@bg-weak` — 次要模块背景
- `@bg-hover` — 悬浮背景

### 7.3 品牌主色（Jay Pink）

- `@color-primary` — 主色 `#FFA6C9`（深色主题 `#ff98c1`）
- `@color-primary-hover` — hover / 按下
- `@color-primary-bg` — 淡粉背景

### 7.4 语义色

- `@success-color` — `#52c41a`
- `@warning-color` — `#faad14`
- `@error-color` — `#ff4d4f`

**禁止**将 `@color-primary` 用于正文或页面底色；粉按钮内文字固定 `#fff`。

## 8. Less 全局变量速查

尺寸 token 定义于 [`src/styles/tokens.less`](../../src/styles/tokens.less)，颜色主题定义于 [`src/styles/variables.less`](../../src/styles/variables.less)。

```less
@import '@styles/variables.less'; // 已包含 tokens.less

// 间距
@spacing-xs ~ @spacing-xxl

// 圆角
@radius-xs ~ @radius-round

// 字体
@font-xs ~ @font-xxl
@line-height-xs ~ @line-height-xxl
@font-weight-regular | medium | semibold

// 阴影 / 层级
@shadow-sm ~ @shadow-xl
@z-content ~ @z-toast

// 语义 Padding
@padding-control-sm
@padding-card
@padding-modal
```

## 9. 全局强制开发约束

- 所有组件**禁止写死** 4 / 8 / 12 / 16 等固定数值，必须引用 token
- 所有卡片默认圆角统一 `@radius-lg`（8px）
- 所有正文默认 `@font-md` / `@line-height-md`
- hover 效果统一使用 `@shadow-md` / `@shadow-lg` 梯度增强
- 深浅主题**只替换色值变量**，尺寸 / 圆角 / 间距完全不变
- 组件内外留白严格遵循 4px 倍数栅格
- 使用 BEM + `@prefix`（`jerry-`）前缀，禁止全局选择器

## 10. 现有组件 Token 映射

| 组件 | 间距 | 圆角 | 字体 | 阴影 / 层级 |
| --- | --- | --- | --- | --- |
| Button | `@spacing-xs/sm/lg/xl` | `@radius-sm` | `@font-xs/md/lg` | focus `@radius-xs`；可选 `@shadow-md` hover |
| Input | `@spacing-xs/sm/md/lg` | `@radius-sm` | `@font-xs/md/lg` | focus `@radius-xs` |
| Skeleton | `@spacing-*` 全套 | `@radius-sm/md/lg` | — | — |
| IconFont | — | — | `@font-md` 默认 | 文本流内，不抬 z-index |
| CardLightBorder | `@radius-xs` 作默认 borderWidth | `@radius-lg` 默认 | — | 流光 `@z-card-hover` |
| Loading | 组件级 CSS 变量（动画几何） | — | — | — |

## 11. 引入方式

组件 Less 入口：

```less
@import '@styles/variables.less';
@import '@styles/mixins.less';
```

业务项目覆盖主题色：

```less
@import '~jerry-components-react/src/styles/variables.less';

:root {
  --color-primary: #your-brand;
}
```

尺寸 token 与颜色 token 分离：换肤只改 `variables.less` 中 CSS 变量，换尺寸改 `tokens.less`。
