# Loading 加载

用于页面或区块的加载状态展示，通过 `type` 区分不同动画样式。

## 何时使用

- 数据加载中，需要向用户反馈等待状态
- 异步操作进行中，阻止用户重复操作

## 代码演示

### cradle

<code src="./demo/basic.tsx"></code>
<code src="./demo/dots.tsx"></code>
<code src="./demo/color.tsx"></code>

### cube

<code src="./demo/cube-basic.tsx"></code>
<code src="./demo/cube-color.tsx"></code>
<code src="./demo/cube-colors.tsx"></code>

### threeBody

<code src="./demo/three-body-basic.tsx"></code>
<code src="./demo/three-body-color.tsx"></code>
<code src="./demo/three-body-colors.tsx"></code>

### ring

<code src="./demo/ring-basic.tsx"></code>
<code src="./demo/ring-color.tsx"></code>
<code src="./demo/ring-size.tsx"></code>

### bounce

<code src="./demo/bounce-basic.tsx"></code>
<code src="./demo/bounce-dots.tsx"></code>
<code src="./demo/bounce-custom.tsx"></code>

### ecg

<code src="./demo/ecg-basic.tsx"></code>
<code src="./demo/ecg-color.tsx"></code>
<code src="./demo/ecg-size.tsx"></code>

### spinner

<code src="./demo/spinner-basic.tsx"></code>
<code src="./demo/spinner-colors.tsx"></code>
<code src="./demo/spinner-size.tsx"></code>

## API

### 公共属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 加载动画类型 | `'cradle' \| 'cube' \| 'threeBody' \| 'ring' \| 'bounce' \| 'ecg' \| 'spinner'` | `'cradle'` |
| className | 自定义类名 | `string` | — |
| style | 自定义样式 | `CSSProperties` | — |

### type 概览

| type | 说明 |
| --- | --- |
| `cradle` | Newton's Cradle 摆动动画，见 [cradle API](#typecradle) |
| `cube` | 3D 立方体旋转，见 [cube API](#typecube) |
| `threeBody` | 三圆点轨道旋转，见 [threeBody API](#typethreebody) |
| `ring` | 圆环旋转加载，见 [ring API](#typering) |
| `bounce` | 跳动圆点加载，见 [bounce API](#typebounce) |
| `ecg` | 心电图滚动加载，见 [ecg API](#typeecg) |
| `spinner` | 放射条旋转加载，见 [spinner API](#typespinner) |

### type="cradle"

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dots | dot 数量（最少 3） | `number` | `3` |
| color | dot 颜色 | `string` | `#FFA6C9` |
| size | 容器尺寸（px） | `number` | `50` |
| speed | 动画周期（秒） | `number` | `1.2` |

用法：`<Loading type="cradle" dots={5} color="#1677ff" />`

### type="cube"

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 立方体尺寸（px） | `number` | `70` |
| color | 面填充色（转透明度） | `string` | `#FFA6C9` |
| colors | border 渐变色数组（≥2 个时循环过渡） | `string[]` | — |
| alpha | 面透明度 | `number` | `0.1` |
| speed | 动画周期（秒） | `number` | `1.6` |

用法：`<Loading type="cube" colors={['#1677ff', '#722ed1']} />`

### type="threeBody"

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 容器尺寸（px） | `number` | `35` |
| color | dot 颜色 | `string` | `#FFA6C9` |
| colors | 渐变色数组（**大于 2 个**时触发颜色循环渐变） | `string[]` | — |
| speed | 动画速度（秒） | `number` | `0.8` |

用法：`<Loading type="threeBody" colors={['#1677ff', '#722ed1', '#52c41a']} />`

### type="ring"

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 容器尺寸（px） | `number` | `40` |
| color | 进度弧颜色 | `string` | 主题粉 |
| trackColor | 轨道颜色 | `string` | 由 `color` 自动生成 25% 透明 |
| percent | 弧线占比 | `number` | `25` |
| strokeWidth | 线宽（px） | `number` | `3` |
| speed | 旋转周期（秒） | `number` | `1` |

用法：`<Loading type="ring" size={48} percent={25} />`

### type="bounce"

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dots | dot 数量（≥1） | `number` | `3` |
| color | dot 颜色 | `string` | 主题粉 |
| size | dot 直径（px） | `number` | `20` |
| gap | dot 间距（px） | `number` | 同 `size` |
| speed | 跳动周期（秒） | `number` | `0.5` |

用法：`<Loading type="bounce" dots={4} size={16} gap={12} />`

### type="ecg"

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 线条颜色 | `string` | 主题粉 |
| width | 容器宽度 | `number \| string` | `220`（px） |
| height | 容器高度 | `number \| string` | `84`（px） |
| speed | 扫描周期（秒） | `number` | `5` |
| strokeWidth | 线条粗细（viewBox 单位） | `number` | `4` |

用法：`<Loading type="ecg" width="100%" height={84} strokeWidth={6} />`

### type="spinner"

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| speed | 旋转周期（秒） | `number` | `1.2` |
| color | 单色模式颜色 | `string` | 主题粉 |
| colors | 多色渐变（≥2 启用） | `string[]` | — |
| size | 直径（px） | `number` | `80` |

用法：`<Loading type="spinner" colors={['#FFA6C9', '#1677ff']} size={100} />`

各类型实现位于 `components/` 子目录。
