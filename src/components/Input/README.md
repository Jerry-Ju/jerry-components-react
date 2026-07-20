# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域组件。

## 何时使用

- 需要用户输入单行文本时
- 需要配合表单进行数据收集时

## 代码演示

<code src="./demo/basic.tsx"></code>
<code src="./demo/disabled.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 输入框尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| prefix | 前缀内容 | `ReactNode` | - |
| suffix | 后缀内容 | `ReactNode` | - |
| placeholder | 占位符 | `string` | - |

其余属性与原生 `input` 一致。
