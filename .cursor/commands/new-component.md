# 新增组件

按 jerry-components-react 组件库规范，根据用户描述新增组件。

## 用户输入

从命令后的描述中提取（缺失则追问）：

- **组件名**（PascalCase，如 `Tag`）
- **中文名**（如 `标签`）
- **功能描述**（用途、交互、变体）
- **Props**（可选，未提供则按描述推断）
- **Demo 场景**（可选，默认 `basic` + `disabled`）

## 必读规范

实施前读取并对照：

- `.cursor/rules/component.mdc`
- `.cursor/rules/ts.mdc`
- `.cursor/rules/less.mdc`（**主题色：中性色 vs 品牌粉**）
- `.cursor/rules/dumi-doc.mdc`

参考现有实现：`src/components/Button/`、`src/components/Input/`

## 第一阶段：输出 Diff 方案（禁止写文件）

先输出 Markdown 方案，包含：

1. 文件清单（新增 / 修改）
2. 每个文件的职责说明
3. 关键代码片段（Props、prefixCls、导出语句）
4. Demo 与 API 表格预览
5. 自检清单

末尾固定询问：**「确认后开始开发」**

### 主题色自检（Less / TS）

- [ ] 文字、背景、边框使用中性变量（`@text-primary`、`@bg-page`、`@border-base` 等）
- [ ] 粉色仅用于强调交互（`@color-primary`、`@color-primary-hover`、`@color-primary-bg`）
- [ ] 无硬编码 hex（粉按钮内 `#fff` 除外；focus 环可用 `@jay-pink-base`）
- [ ] TS 默认色引用 `JayPink.base`，不直接写 `#FFA6C9`

在用户明确确认前，**不得** Create/Write/Edit 任何文件。

## 第二阶段：确认后开发

用户确认后，按顺序执行：

1. 运行脚手架：

   ```bash
   pnpm scaffold:component -- <ComponentName> --title "<中文名>" --demos basic,disabled
   ```

2. 根据描述完善 `index.tsx`、`types.ts`、`index.less`、README、demo
3. 更新 `src/components/index.ts` 导出组件与类型
4. 若 Props 含新的公共类型，补充 `src/types/common.ts`
5. 运行 `pnpm lint`，修复问题
6. 提示 `pnpm dev` 预览文档路径（如 `/components/tag`）

## 命名约定

| 项 | 规则 | 示例 |
| --- | --- | --- |
| 目录 | PascalCase | `Tag/` |
| 类名前缀 | `jerry-{kebab}` | `jerry-tag` |
| Less 变量 | `@tag-prefix: ~'@{prefix}-tag'` | — |
| 动画名 | 静态字符串 | `jerry-tag-fade` |

## 禁止事项

- 不写全局样式（`body`/`html`）
- 不使用 `any`
- Less 动画名不用 `@{var}-name` 插值
- **不硬编码颜色值**（必须走 `variables.less` 主题变量）
- **不用粉色做正文文字或页面背景**
- 不修改无关文件
- 不跳过确认直接开发
