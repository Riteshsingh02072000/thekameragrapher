import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const portfolioRoot = path.join(projectRoot, 'public', 'portfolio');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const MAX_EDGE = 2200;
const JPEG_QUALITY = '82';

async function listFiles(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
    .sort((left, right) =>
      left.localeCompare(right, undefined, {
        numeric: true,
        sensitivity: 'base',
      }),
    );
}

async function optimizeFile(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'portfolio-opt-'));
  const tempOutput = path.join(tempDirectory, path.basename(filePath));

  const args = ['--resampleHeightWidthMax', String(MAX_EDGE), '--optimizeColorForSharing'];

  if (extension === '.jpg' || extension === '.jpeg') {
    args.push('-s', 'formatOptions', JPEG_QUALITY);
  }

  args.push(filePath, '--out', tempOutput);

  await execFileAsync('sips', args);
  await fs.copyFile(tempOutput, filePath);
  await fs.rm(tempDirectory, { recursive: true, force: true });
}

async function optimizeCategory(categoryPath, categoryName) {
  const files = await listFiles(categoryPath);

  for (const fileName of files) {
    await optimizeFile(path.join(categoryPath, fileName));
  }

  return `${categoryName}: ${files.length}`;
}

async function main() {
  const entries = await fs.readdir(portfolioRoot, { withFileTypes: true });
  const categories = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));

  const results = [];

  for (const category of categories) {
    results.push(await optimizeCategory(path.join(portfolioRoot, category), category));
  }

  console.log(`Optimized portfolio images -> ${results.join(', ')}`);
  console.log(`Resize cap: ${MAX_EDGE}px, JPEG quality: ${JPEG_QUALITY}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
