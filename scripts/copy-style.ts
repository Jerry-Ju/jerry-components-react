import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const styleTargets = ['dist/esm/styles', 'dist/cjs/styles'];
const iconFontDownloadSource = join(root, 'src/components/IconFont/download');
const iconFontFiles = ['iconfont.css', 'iconfont.woff2', 'iconfont.woff', 'iconfont.ttf', 'iconfont.json'];

const sourceStyleDir = join(root, 'src/styles');

for (const target of styleTargets) {
  const dest = join(root, target);
  if (!existsSync(dirname(dest))) {
    mkdirSync(dirname(dest), { recursive: true });
  }
  cpSync(sourceStyleDir, dest, { recursive: true });
  console.log(`Copied styles to ${target}`);
}

for (const format of ['esm', 'cjs'] as const) {
  const destDir = join(root, `dist/${format}/components/IconFont/download`);
  mkdirSync(destDir, { recursive: true });

  for (const file of iconFontFiles) {
    const sourceFile = join(iconFontDownloadSource, file);

    if (existsSync(sourceFile)) {
      cpSync(sourceFile, join(destDir, file));
    }
  }

  console.log(`Copied IconFont download assets to dist/${format}/components/IconFont/download`);
}

console.log('Style copy completed.');
