---
title: 主题定制
order: 2
---

# 主题定制

主题体系拆分为 **中性黑白灰**（文字 / 背景 / 边框）与 **品牌粉色**（强调 / 交互）两套独立变量，互不干扰。

## 设计原则

1. **文字黑白体系固定分层**：浅色黑字、深色白字，遵循传统阅读习惯
2. **粉色只做品牌强调**：主按钮、标签、激活态、Loading 等高亮元素
3. **Less + CSS 变量**：`:root` 默认浅色，`.theme-dark` 覆写深色，组件通过 Less 别名引用

## 中性色变量（文字 / 背景 / 边框）

| 变量 | 浅色 | 深色 | 用途 |
| --- | --- | --- | --- |
| `@text-primary` | `#111111` | `#ffffff` | 标题、正文 |
| `@text-secondary` | `#444444` | `#e5e5e5` | 描述、备注 |
| `@text-placeholder` | `#999999` | `#888888` | 占位符 |
| `@text-disabled` | `#bbbbbb` | `#555555` | 禁用文字 |
| `@bg-page` | `#ffffff` | `#121212` | 页面底色 |
| `@bg-card` | `#fafafa` | `#1e1e1e` | 卡片 / 弹窗 |
| `@bg-weak` | `#f5f5f5` | `#2a2a2a` | 次要模块背景 |
| `@border-base` | `#e5e5e5` | `#3a3a3a` | 分割线、边框 |

## 品牌粉色变量（强调 / 交互）

| 变量 | 浅色 | 深色 | 用途 |
| --- | --- | --- | --- |
| `@color-primary` | `#FFA6C9` | `#ff98c1` | 主按钮、高亮 |
| `@color-primary-hover` | `#F27FB0` | `#f171a4` | hover / 激活 |
| `@color-primary-bg` | `#FFF0F7` | `#2c1723` | 标签背景、text 按钮 hover |

固定粉色阶梯（不随明暗变化）：`@jay-pink-base`、`@jay-pink-1` ~ `@jay-pink-8`。

## 使用规则

### 中性色 — 通用场景

页面背景、卡片、标题正文、边框一律使用中性变量：

```less
.lib-card {
  color: @text-primary;
  background: @bg-card;
  border: 1px solid @border-base;
}
```

### 品牌粉 — 仅高亮交互

主按钮、标签、选中态、Loading 等：

```less
.lib-button-primary {
  background: @color-primary;
  color: #fff; // 粉按钮内文字固定白色

  &:hover {
    background: @color-primary-hover;
  }
}
```

## TS 主题配置

```tsx | pure
import {
  JayPink,
  LightTheme,
  DarkTheme,
  useTheme,
  type ThemeConfig,
  type ThemeMode,
} from 'jerry-components-react';

const { mode, theme, toggle } = useTheme('light');

// 页面文字 / 背景读中性色
theme.textPrimary;
theme.bgPage;

// 按钮 / 高亮读品牌色
theme.primary;
theme.primaryHover;
```

`useTheme` 会在 `document.documentElement` 上切换 `.theme-dark` 类名，Less/CSS 变量自动生效。

## 覆盖变量

在业务项目 Less 入口：

```less
@import '~jerry-components-react/src/styles/variables.less';

// 仅改品牌强调色，文字体系不受影响
:root {
  --color-primary: #722ed1;
  --color-primary-hover: #531dab;
  --color-primary-bg: #f9f0ff;
}
```

## 兼容旧变量

| 旧变量 | 新别名 |
| --- | --- |
| `@primary-color` | `@color-primary` |
| `@text-color` | `@text-primary` |
| `@border-color` | `@border-base` |

## 类名前缀

所有组件 BEM 类名以 `jerry-` 为前缀，例如 `jerry-btn`、`jerry-input`。
