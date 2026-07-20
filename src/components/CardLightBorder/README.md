# CardLightBorder 流光边框卡片

通用卡片包裹型容器，hover 时边框产生顺时针流光环绕高亮动效，纯 CSS 实现，零 JS 动画计算。

## 何时使用

- 后台功能模块卡片、数据卡片 hover 视觉增强
- 重点内容区域需要高颜值边框动效
- 任意原有卡片内容可直接包裹，无侵入

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 关闭动效

<code src="./demo/inactive.tsx"></code>

### 速度档位

<code src="./demo/speed.tsx"></code>

### 自定义参数

<code src="./demo/custom.tsx"></code>

### 主题适配

<code src="./demo/theme.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否开启 hover 流光动效 | `boolean` | `true` |
| speed | 动画速度档位 | `'slow' \| 'default' \| 'fast'` | `'default'` |
| color | 流光高亮色，不传则跟随主题 `--color-primary` | `string` | — |
| borderWidth | 流光边框粗细（px） | `number` | `2` |
| radius | 卡片圆角，数字视为 px | `number \| string` | `8` |
| className | 自定义类名 | `string` | — |
| style | 自定义样式 | `CSSProperties` | — |
| children | 卡片内容 | `ReactNode` | — |

## 用法示例

```tsx | pure
<CardLightBorder speed="fast" borderWidth={2} radius={12}>
  <div className="jerry-card-light-border__content" style={{ aspectRatio: '16 / 9' }}>
    封面区域
  </div>
  <div style={{ padding: '8px 6px 0', marginTop: 8 }}>标题与操作区</div>
</CardLightBorder>
```

## 实现说明

- 外层容器即卡片根节点：`padding` 预留流光环带，`::before` 锥形渐变旋转，`overflow: hidden` 裁切
- 子元素直接挂载在外层内（无额外包裹层），通过 `> *` 提升层级；需实色背景的区块可使用 `jerry-card-light-border__content`
- `data-border-active="true"` 且 hover 时开启动画，移出暂停
- 伪元素 `pointer-events: none`，不影响内部按钮、输入等交互
- CSS 变量：`--jerry-clb-content-radius` 供内容区圆角（外层 radius − borderWidth）
