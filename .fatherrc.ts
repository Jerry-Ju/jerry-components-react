import { defineConfig } from 'father';
import { babelPathAlias } from './config/paths';

export default defineConfig({
  extraBabelPlugins: [
    [
      'module-resolver',
      {
        alias: babelPathAlias,
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
  ],
  esm: {
    output: 'dist/esm',
    transformer: 'babel',
    ignores: ['src/**/demo/**'],
  },
  cjs: {
    output: 'dist/cjs',
    transformer: 'babel',
    ignores: ['src/**/demo/**'],
  },
});
