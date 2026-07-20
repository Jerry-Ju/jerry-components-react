---
title: 快速上手
order: 1
---

# 快速上手

## 安装

```bash
pnpm add jerry-components-react
# or
npm install jerry-components-react
```

## 引入组件

```tsx | pure
import { Button, Input } from 'jerry-components-react';
import 'jerry-components-react/dist/esm/components/Button/index.less';
import 'jerry-components-react/dist/esm/components/Input/index.less';

export default () => (
  <>
    <Button variant="primary">Hello</Button>
    <Input placeholder="请输入" />
  </>
);
```

## 开发

```bash
pnpm install
pnpm dev
```

访问 http://localhost:8000 查看组件文档。
