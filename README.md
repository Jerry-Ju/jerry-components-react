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

## 代码推送规范

远程仓库：[https://github.com/Jerry-Ju/jerry-components-react](https://github.com/Jerry-Ju/jerry-components-react)

默认分支为 `main`，功能开发使用 `feat/xxx`，Bug 修复使用 `fix/xxx`。

### 推送前检查

提交前请确认：

```bash
pnpm lint          # ESLint 检查
pnpm build         # 组件库打包（可选，发版前建议执行）
```

以下目录/文件**不要提交**（已在 `.gitignore` 中）：

| 路径 | 说明 |
| --- | --- |
| `node_modules/` | 依赖 |
| `dist/` | 组件库构建产物 |
| `docs-dist/` | 文档站点构建产物 |
| `.dumi/` | Dumi 临时缓存 |
| `.pnpm-store/` | 本地 pnpm 缓存 |

### 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/)：

| 类型 | 用途 | 示例 |
| --- | --- | --- |
| `feat:` | 新功能（新组件、新 API） | `feat: add Ring loading type` |
| `fix:` | Bug 修复 | `fix: cradle dots layout at dots=5` |
| `docs:` | 文档变更 | `docs: update theme guide` |
| `style:` | 样式调整（不影响逻辑） | `style: adjust button hover border` |
| `refactor:` | 重构 | `refactor: split theme neutral colors` |
| `chore:` | 构建 / 工具链变更 | `chore: upgrade dumi` |

### 日常推送流程

```bash
# 1. 查看变更
git status
git diff

# 2. 暂存并提交
git add .
git commit -m "feat: your change description"

# 3. 推送到远程
git push origin main
```

在功能分支上开发时：

```bash
git checkout -b feat/tag-component
# ... 开发并提交 ...
git push -u origin feat/tag-component
# 在 GitHub 创建 Pull Request 合并到 main
```

### 首次克隆 / 关联远程

```bash
git clone git@github.com:Jerry-Ju/jerry-components-react.git
cd jerry-components-react
pnpm install
pnpm dev
```

若本地已有仓库、尚未关联远程：

```bash
git remote add origin git@github.com:Jerry-Ju/jerry-components-react.git
git branch -M main
git push -u origin main
```

> 推荐使用 SSH 地址推送（`git@github.com:...`）。HTTPS 需配置 GitHub 凭证。

## License

MIT
