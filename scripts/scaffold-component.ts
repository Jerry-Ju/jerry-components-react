import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS_DIR = join(ROOT, 'src/components');

function toKebabCase(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function parseArgs(argv: string[]) {
  const args = argv.slice(2);
  const positional: string[] = [];
  let title = '';
  let demos = ['basic', 'disabled'];

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === '--') continue;
    if (arg === '--title') {
      title = args[i + 1] ?? '';
      i += 1;
      continue;
    }
    if (arg === '--demos') {
      demos = (args[i + 1] ?? 'basic,disabled')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
      i += 1;
      continue;
    }
    if (!arg.startsWith('--')) {
      positional.push(arg);
    }
  }

  return {
    componentName: positional[0] ?? '',
    title,
    demos,
  };
}

function assertValidComponentName(name: string): void {
  if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
    throw new Error(`Invalid component name "${name}". Use PascalCase, e.g. Tag, DatePicker.`);
  }
}

function renderTypes(componentName: string): string {
  return `import type { BaseComponentProps } from '@types';
import type { ReactNode } from 'react';

export interface ${componentName}Props extends BaseComponentProps {
  /** 是否禁用 */
  disabled?: boolean;
  /** 组件内容 */
  children?: ReactNode;
}
`;
}

function renderIndexTsx(componentName: string, prefixCls: string): string {
  return `import React from 'react';
import { classNames } from '@utils';
import type { ${componentName}Props } from './types';
import './index.less';

const prefixCls = '${prefixCls}';

export const ${componentName}: React.FC<${componentName}Props> = ({
  disabled = false,
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classNames(
        prefixCls,
        disabled && \`\${prefixCls}--disabled\`,
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;
}

function renderLess(kebabName: string): string {
  return `@import '@styles/variables.less';
@import '@styles/mixins.less';

@${kebabName}-prefix: ~'@{prefix}-${kebabName}';

.@{${kebabName}-prefix} {
  .flex-center();
  .text-md();
  color: @text-primary;
  border-radius: @radius-md;

  &--disabled {
    .disabled();
  }
}
`;
}

function renderReadme(componentName: string, title: string, demos: string[]): string {
  const demoBlocks = demos.map((demo) => `<code src="./demo/${demo}.tsx"></code>`).join('\n');

  return `# ${componentName} ${title}

${title}组件。

## 何时使用

- 在此补充使用场景

## 代码演示

${demoBlocks}

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | \`boolean\` | \`false\` |

其余属性继承 \`BaseComponentProps\`（\`className\`、\`style\`）。
`;
}

function renderDemo(componentName: string, demoName: string): string {
  if (demoName === 'disabled') {
    return `import React from 'react';
import { ${componentName} } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <${componentName}>Default</${componentName}>
    <${componentName} disabled>Disabled</${componentName}>
  </div>
);
`;
  }

  return `import React from 'react';
import { ${componentName} } from 'jerry-components-react';

export default () => <${componentName}>Basic ${componentName}</${componentName}>;
`;
}

function main(): void {
  const { componentName, title, demos } = parseArgs(process.argv);

  if (!componentName) {
    console.error(
      'Usage: pnpm scaffold:component -- <ComponentName> --title "<中文名>" [--demos basic,disabled]',
    );
    process.exit(1);
  }

  assertValidComponentName(componentName);

  const kebabName = toKebabCase(componentName);
  const prefixCls = `jerry-${kebabName}`;
  const componentDir = join(COMPONENTS_DIR, componentName);
  const demoDir = join(componentDir, 'demo');

  if (existsSync(componentDir)) {
    throw new Error(`Component directory already exists: ${componentDir}`);
  }

  mkdirSync(demoDir, { recursive: true });

  const chineseTitle = title || componentName;

  writeFileSync(join(componentDir, 'types.ts'), renderTypes(componentName), 'utf8');
  writeFileSync(join(componentDir, 'index.tsx'), renderIndexTsx(componentName, prefixCls), 'utf8');
  writeFileSync(join(componentDir, 'index.less'), renderLess(kebabName), 'utf8');
  writeFileSync(
    join(componentDir, 'README.md'),
    renderReadme(componentName, chineseTitle, demos),
    'utf8',
  );

  for (const demo of demos) {
    writeFileSync(join(demoDir, `${demo}.tsx`), renderDemo(componentName, demo), 'utf8');
  }

  console.log(`Scaffolded ${componentName} at src/components/${componentName}/`);
  console.log(`Prefix class: ${prefixCls}`);
  console.log(`Demos: ${demos.join(', ')}`);
  console.log('');
  console.log('Next steps:');
  console.log(`1. Implement business logic in src/components/${componentName}/`);
  console.log('2. Export from src/components/index.ts');
  console.log('3. Run pnpm lint && pnpm dev');
}

main();
