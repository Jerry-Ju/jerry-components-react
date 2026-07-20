---
title: 全局 API
order: 10
---

# 全局 API

## Hooks

### useTheme

切换浅色 / 深色主题，在 `document.documentElement` 上切换 `.theme-dark` 类名。

```tsx | pure
import { useTheme } from 'jerry-components-react';

const { mode, theme, setMode, toggle } = useTheme('light');

// theme.textPrimary / theme.bgPage — 中性色
// theme.primary / theme.primaryHover — 品牌粉
```

### useClickOutside

监听元素外部的点击事件。

```tsx | pure
import { useRef } from 'react';
import { useClickOutside } from 'jerry-components-react';

const ref = useRef<HTMLDivElement>(null);

useClickOutside(ref, () => {
  console.log('clicked outside');
});
```

## Utils

### classNames

合并 className 字符串，自动过滤 falsy 值。

```tsx | pure
import { classNames } from 'jerry-components-react';

classNames('foo', false && 'bar', 'baz'); // 'foo baz'
```

### isBrowser

判断当前是否在浏览器环境。

```tsx | pure
import { isBrowser } from 'jerry-components-react';

if (isBrowser()) {
  // browser only
}
```

## 类型

| 类型 | 说明 |
| --- | --- |
| `Size` | `'small' \| 'medium' \| 'large'` |
| `Variant` | `'primary' \| 'default' \| 'text'` |
| `BaseComponentProps` | 公共 props：`className`、`style` |
| `ThemeMode` | `'light' \| 'dark'` |
| `ThemeConfig` | 完整主题配置（中性色 + 品牌色） |
| `NeutralColorConfig` | 中性黑白灰体系 |
| `BrandColorConfig` | 品牌粉色强调色 |
