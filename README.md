# Jerry Components React

React 18 + TypeScript 5 + Dumi 2 + Less 组件库完整方案。

## 技术栈

- **React 18** — UI 框架
- **TypeScript 5** — 类型系统
- **Dumi 2** — 文档站点与组件开发
- **Father 4 (Rollup)** — 组件库打包
- **Less** — 样式方案
- **ESLint + Prettier** — 代码规范

## 目录结构

```
├── .cursor/
│   ├── rules/              # Cursor AI 开发规范
│   └── commands/           # Cursor Slash 命令
├── .dumirc.ts              # Dumi 配置
├── .fatherrc.ts            # Father 打包配置
├── config/paths.ts         # 路径别名统一配置
├── src/
│   ├── components/         # 业务组件（含 demo、README）
│   ├── styles/             # 全局 Less 变量与混合器
│   ├── types/              # 公共类型
│   ├── hooks/              # 公共 Hooks
│   └── utils/              # 工具函数
├── docs/                   # 独立文档页
├── scripts/                # 构建辅助脚本
├── dist/                   # 组件库产物
└── docs-dist/              # 文档站点产物
```

## 路径别名

组件内统一使用别名，避免相对路径：

| 别名 | 指向 |
| --- | --- |
| `@types` | `src/types` |
| `@utils` | `src/utils` |
| `@hooks` | `src/hooks` |
| `@styles/*` | `src/styles/*`（含 `theme.ts` 主题常量） |
| `@components/*` | `src/components/*` |

默认主题色为周杰伦官方应援粉 **#FFA6C9**（`@jay-pink`），详见 [主题定制](/guide/theme)。

```tsx
import { classNames } from '@utils';
import type { BaseComponentProps } from '@types';
```

```less
@import '@styles/variables.less';
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动文档开发
pnpm dev

# 打包组件库
pnpm build

# 打包文档站点
pnpm build:docs
```

## 新增组件

### 方式一：Cursor 命令（推荐）

在 Cursor 聊天框输入：

```
/new-component Tag 标签组件，支持多种颜色变体 closable
```

Agent 会先输出 diff 方案，确认后再生成代码。

### 方式三：修复 Bug

```
/fix-bug Loading 组件 dots=5 时圆点被压扁成椭圆
```

Agent 会先分析根因并输出 diff 方案，确认后才应用修复。

### 方式二：脚手架命令

```bash
pnpm scaffold:component -- Tag --title "标签" --demos basic,disabled
```

然后完善业务逻辑，并在 `src/components/index.ts` 中导出，运行 `pnpm dev` 预览文档。

## License

MIT
