# Skeleton 骨架屏

在页面、区块或卡片数据异步加载时展示占位结构，优化白屏体验。

## 何时使用

- 接口请求、列表加载、弹窗内容加载等异步等待场景
- 需要在数据到达前保持布局结构稳定
- 图片懒加载、表单模块加载等占位过渡

## 代码演示

<code src="./demo/basic.tsx"></code>
<code src="./demo/loading.tsx"></code>
<code src="./demo/templates.tsx"></code>
<code src="./demo/composition.tsx"></code>
<code src="./demo/inactive.tsx"></code>
<code src="./demo/size.tsx"></code>

## API

### Skeleton

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否展示骨架；`false` 且有 `children` 时渲染真实内容 | `boolean` | `true` |
| active | 是否启用波纹动画 | `boolean` | `true` |
| size | 尺寸等级 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| template | 快速模板 | `'list' \| 'card' \| 'detail'` | — |
| count | 列表模板重复条数 | `number` | `1` |
| rows | 段落行数 | `number` | `3` |
| avatar | 头像占位 | `boolean \| SkeletonAvatarProps` | — |
| title | 标题占位 | `boolean \| SkeletonTitleProps` | — |
| paragraph | 段落占位 | `boolean \| SkeletonParagraphProps` | — |
| className | 自定义类名 | `string` | — |
| style | 自定义样式 | `CSSProperties` | — |

### Skeleton.Avatar

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸（px），未传时跟随 Skeleton `size` | `number` | `medium` → `40` |
| shape | 形状 | `'circle' \| 'square'` | `'circle'` |

### Skeleton.Title

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 宽度 | `number \| string` | `'38%'` |
| height | 高度（px），未传时跟随 Skeleton `size` | `number` | `medium` → `16` |

### Skeleton.Paragraph

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 行数 | `number` | `3` |
| widths | 每行宽度 | `Array<number \| string>` | 末行 `60%` |

行高跟随 Skeleton `size`（small `12` / medium `14` / large `16`）。

### Skeleton.Block

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 宽度 | `number \| string` | `'100%'` |
| height | 高度（px），未传时跟随 Skeleton `size` | `number` | `medium` → `32` |
| shape | 形状 | `'rect' \| 'circle' \| 'round'` | `'rect'` |

## 用法示例

包裹模式：

```tsx | pure
<Skeleton loading={loading} avatar paragraph={{ rows: 3 }}>
  <ArticleCard data={data} />
</Skeleton>
```

模板模式：

```tsx | pure
<Skeleton template="list" count={3} />
<Skeleton template="card" />
<Skeleton template="detail" rows={5} />
```

自由组合：

```tsx | pure
<Skeleton active>
  <Skeleton.Avatar size={48} />
  <Skeleton.Title width="40%" />
  <Skeleton.Paragraph rows={4} />
  <Skeleton.Block width="100%" height={120} shape="round" />
</Skeleton>
```
