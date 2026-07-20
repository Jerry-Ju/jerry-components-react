---
title: IconFont 字体图标
---

# IconFont 字体图标

基于阿里巴巴 iconfont Font Class 本地离线方案封装的通用图标组件。

## 何时使用

- 导航、按钮、菜单、状态、操作等全局图标场景
- 需要统一图标入口、主题色跟随、旋转/翻转/loading 动画
- 内网或离线环境，不依赖在线 CDN

## 代码演示

### 全部图标

当前 iconfont 项目内置的全部图标，名称可直接复制使用。

<code src="./demo/basic.tsx"></code>
<code src="./demo/style.tsx"></code>
<code src="./demo/animation.tsx"></code>
<code src="./demo/flip-disabled.tsx"></code>
<code src="./demo/theme.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | FontClass 名称 | `IconFontType \| string` | — |
| rotate | 旋转角度（0~360），`spin` 为 true 时不生效 | `number` | `0` |
| spin | 无限旋转动画 | `boolean` | `false` |
| flip | 翻转方向 | `'horizontal' \| 'vertical' \| ''` | `''` |
| disabled | 禁用态 | `boolean` | `false` |
| className | 自定义类名 | `string` | — |
| style | 行内样式（尺寸、颜色等） | `CSSProperties` | — |
| onClick | 点击事件，传入后悬浮为手型 | `(e) => void` | — |

尺寸、颜色不内置 props，统一通过 `className` / `style` 自定义。

## 用法示例

```tsx | pure
<IconFont type="trending_up" style={{ fontSize: 24, color: 'var(--color-primary)' }} />
<IconFont type="doughnut_chart" spin />
<IconFont type="bar_chart" rotate={90} flip="horizontal" />
```

## 图标资源更新流程

1. 登录 [iconfont.cn](https://www.iconfont.cn) 更新项目图标
2. 下载至本地，覆盖 `download/` 目录下的 `iconfont.css`、`.woff2`、`.woff`、`.ttf`
3. 同步更新 `types.ts` 中的 `IconFontType`（或重新从 `iconfont.json` 生成）
4. 组件代码无需改动，重新构建即可

## 内置图标

当前项目前缀 `icon-`，可用 `type` 示例：

`line_chart_down`、`trending_up`、`bar_chart`、`pie_chart_outline`、`data`、`form` 等，完整列表见 `download/iconfont.json`。
