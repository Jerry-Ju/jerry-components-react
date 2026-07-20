import { join } from 'node:path';

const root = join(__dirname, '..');

/** 与 tsconfig paths / dumi alias / babel module-resolver 保持一致 */
export const pathAlias = {
  '@types': join(root, 'src/types'),
  '@utils': join(root, 'src/utils'),
  '@hooks': join(root, 'src/hooks'),
  '@styles': join(root, 'src/styles'),
  '@components': join(root, 'src/components'),
} as const;

/** babel-plugin-module-resolver 使用相对路径 */
export const babelPathAlias = {
  '@types': './src/types',
  '@utils': './src/utils',
  '@hooks': './src/hooks',
  '@styles': './src/styles',
  '@components': './src/components',
} as const;
