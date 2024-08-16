# koishi-plugin-resvg

[![npm](https://img.shields.io/npm/v/koishi-plugin-resvg?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-resvg)

[resvg](https://github.com/yisibl/resvg-js) service


## example

```Typescript
import { Context } from 'koishi'
import { exit } from 'process'
import Resvg from 'koishi-plugin-resvg'
import { resolve } from 'path';
import { writeFileSync } from 'fs';

const app = new Context()

app.plugin(Resvg);

(async () => {
  await app.start()

  const svg = await app.resvg.renderAsync(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <rect x="10" y="10" width="80" height="80" fill="orange" />
  </svg>`)
  writeFileSync(resolve(__dirname, '0.jpg'), svg.asPng())

  const resvg = app.resvg.newResvg(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <rect x="10" y="10" width="80" height="80" fill="orange" />
  </svg>`)
  let svg2 = resvg.render()
  writeFileSync(resolve(__dirname, '1.jpg'), svg2.asPng())
  console.log(resvg.width, resvg.height)
  exit()
})()
```

## Support matrix

|                  | Node.js 12 | Node.js 14 | Node.js 16 | Node.js 18 | Node.js 20 | npm                                                                                                                                                                     |
| ---------------- | ---------- | ---------- | ---------- | ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows x64      | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-win32-x64-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-win32-x64-msvc)           |
| Windows x32      | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-win32-ia32-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-win32-ia32-msvc)         |
| Windows arm64    | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-win32-arm64-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-win32-arm64-msvc)       |
| macOS x64        | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-darwin-x64.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-darwin-x64)                   |
| macOS arm64(M1)  | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-darwin-arm64.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-darwin-arm64)               |
| Linux x64 gnu    | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-linux-x64-gnu.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-linux-x64-gnu)             |
| Linux x64 musl   | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-linux-x64-musl.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-linux-x64-musl)           |
| Linux arm gnu    | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-linux-arm-gnueabihf.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-linux-arm-gnueabihf) |
| Linux arm64 gnu  | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-linux-arm64-gnu.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-linux-arm64-gnu)         |
| Linux arm64 musl | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-linux-arm64-musl.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-linux-arm64-musl)       |
| Android arm64    | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-android-arm64.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-android-arm64)             |
| Android armv7    | ✓          | ✓          | ✓          | ✓          | ✓          | [![npm version](https://img.shields.io/npm/v/@resvg/resvg-js-android-arm-eabi.svg?sanitize=true)](https://www.npmjs.com/package/@resvg/resvg-js-android-arm-eabi)       |
