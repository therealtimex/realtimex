import { renameSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
// const process.cwd() = path.dirname(fileURLToPath(import.meta.url));

console.log(`Running frontend post build script...`)
// renameSync('dist/index.html', 'dist/_index.html');
console.log(`index.html renamed to _index.html so SSR of the index page can be assumed.`);