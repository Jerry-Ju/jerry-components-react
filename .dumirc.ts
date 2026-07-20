import { defineConfig } from 'dumi';
import { pathAlias } from './config/paths';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    entryFile: './src/index.ts',
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
  themeConfig: {
    name: 'Jerry Components React',
    nav: [
      { title: '指南', link: '/guide/install' },
      { title: '组件', link: '/components/button' },
      { title: 'API', link: '/api' },
    ],
    footer: 'Copyright © 2026 Jerry Components React',
  },
  alias: {
    'jerry-components-react': require.resolve('./src/index.ts'),
    ...pathAlias,
  },
});
