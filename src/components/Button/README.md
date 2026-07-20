# Button 按钮

用于触发一个操作。

## 何时使用

- 需要用户执行操作时，如提交表单、确认操作
- 需要引导用户进行下一步操作时

## 代码演示

<code src="./demo/basic.tsx"></code>
<code src="./demo/disabled.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 按钮类型 | `'primary' \| 'default' \| 'text'` | `'primary'` |
| size | 按钮尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| htmlType | 原生 button type | `'button' \| 'submit' \| 'reset'` | `'button'` |

其余属性与原生 `button` 一致。
