import { existsSync, mkdirSync } from 'fs';
import envPaths from 'env-paths';
import { join } from 'path';
import { extract } from 'tar'
import get from 'get-registry'
import pkg from './utils.js';
import { Readable } from 'stream';
const { getNativeBinding } = pkg;

const version = '2.6.2'
const { platform, arch } = process





// Fork from https://github.com/koishijs/node-gocqhttp/blob/master/src/install.ts
export async function download(basename, moduleName, version, cwd) {
  const registry = (await get()).replace(/\/$/, '')
  mkdirSync(cwd, { recursive: true })
  const url = `${registry}/${moduleName}/-/${moduleName.replace('@resvg/', '')}-${version}.tgz`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }

  const readable = Readable.from(response.body)

  const writable = extract({ cwd, newer: true, strip: 1 }, ['package/' + basename])
  await new Promise((resolve, reject) => {
    writable.on('close', resolve)
    writable.on('error', reject)
    readable.on('error', reject)
    readable.pipe(writable)
  })
}

let [name, moduleName] = getNativeBinding(platform, arch)
let storingDir = join(envPaths('resvg').data, version)
let storingPath = join(storingDir, name)


if (!existsSync(storingPath)) {
  download(name, moduleName, version, storingDir)
}
