import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const styleTargets = [
  'dist/esm/styles',
  'dist/cjs/styles',
];

const sourceStyleDir = join(root, 'src/styles');

for (const target of styleTargets) {
  const dest = join(root, target);
  if (!existsSync(dirname(dest))) {
    mkdirSync(dirname(dest), { recursive: true });
  }
  cpSync(sourceStyleDir, dest, { recursive: true });
  console.log(`Copied styles to ${target}`);
}

console.log('Style copy completed.');
