// node --experimental-modules src/modules/esm.mjs
// I  have node 16.8 bc i working on oldest version of react native, so cant change please use above-mentioned command for launching

import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module'
import { release, version } from 'node:os';
import {createServer as createServerHttp} from 'node:http';
import './files/c.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();



const require = createRequire(import.meta.url);

let unknownObject;

if (random > 0.5) {
  unknownObject = require('./files/a.json');
} else {
  unknownObject = require('./files/b.json');
}

console.log(unknownObject);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

