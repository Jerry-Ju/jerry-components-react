# CardLightBorder 流光边框卡片

通用卡片包裹型容器，边框流光动效纯 CSS 实现，支持 hover / 常驻、顺逆时针、双色渐变与聚焦/选中态。

## 何时使用

- 后台功能模块卡片、数据卡片 hover 视觉增强
- 重点卡片常驻流光、列表选中高亮
- 任意原有卡片内容可直接包裹，无侵入

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 关闭动效

<code src="./demo/inactive.tsx"></code>

### 常驻流光

<code src="./demo/always.tsx"></code>

### 旋转方向

<code src="./demo/direction.tsx"></code>

### 颜色数组

<code src="./demo/dual-color.tsx"></code>

### 聚焦与选中

<code src="./demo/state.tsx"></code>

### 组合能力

<code src="./demo/combined.tsx"></code>

### 速度档位

<code src="./demo/speed.tsx"></code>

### 自定义参数

<code src="./demo/custom.tsx"></code>

### 主题适配

<code src="./demo/theme.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 触发模式：`hover` 移入播放 / `always` 常驻 / `none` 关闭 | `'hover' \| 'always' \| 'none'` | `'hover'` |
| direction | 旋转方向 | `'clockwise' \| 'counterclockwise'` | `'clockwise'` |
| state | 边框状态（配合 `fixedAngle` 固定亮带角度） | `'default' \| 'focus' \| 'selected'` | `'default'` |
| speed | 动画速度档位 | `'slow' \| 'default' \| 'fast'` | `'default'` |
| colors | 流光颜色数组，长度 1 为单色，≥ 2 为渐变色（可彩虹色） | `string[]` | 主题 `--color-primary` |
| fixedAngle | 固定亮带角度（0~360），配合 `state` 停止旋转 | `number` | — |
| borderWidth | 流光边框粗细（px） | `number` | `2` |
| radius | 卡片圆角 | `number \| string` | `8` |
| cardBorder | 卡片基础边框颜色 | `string` | `@border-base` |
| className | 自定义类名 | `string` | — |
| style | 自定义样式 | `CSSProperties` | — |
| children | 卡片内容 | `ReactNode` | — |

### colors 说明

- `colors={['#FFA6C9']}` — 单色流光
- `colors={['#FFA6C9', '#F27FB0']}` — 两色沿弧带平滑过渡
- `colors={['#FF6B6B', '#FCBF51', '#6BCB77', '#4D96FF']}` — 多色/彩虹渐变

### 行为说明

1. `trigger='hover'` → 仅 hover / focus-within 时显示流光，移出暂停
2. `trigger='always'` → 流光常驻旋转
3. `trigger='none'` → 关闭流光（替代原 `active={false}`）
4. `state='focus'` → 设置 `tabIndex={0}`，配合 `trigger='hover'` 可键盘聚焦触发
5. `fixedAngle` + `state='selected' \| 'focus'` → 在对应 trigger 生效时固定亮带角度、停止旋转

## 用法示例

```tsx | pure
<CardLightBorder
  trigger="always"
  direction="counterclockwise"
  colors={['#FFA6C9', '#FCBF51', '#F27FB0']}
  state="selected"
  fixedAngle={90}
>
  <div className="jerry-card-light-border__content">封面</div>
  <div>底部信息</div>
</CardLightBorder>
```

## 实现说明

- 外层 `padding` 环带 + `background` 作为基础 border（`cardBorder` / `@border-base`）；`::before` 以 mask 限定在同宽环带，高亮段叠加、透明段露出底层 border 色
- `data-border-trigger` 控制播放时机，仅触发态显示流光
- `@property --jerry-clb-angle` 驱动渐变旋转，GPU 友好
- `jerry-card-light-border__content` 用于封面等实色区块
