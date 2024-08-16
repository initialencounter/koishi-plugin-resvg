/// <reference types="node" />
import { getNativeBinding } from '../utils'
import envPaths from './envPath';
import { join } from 'path';
import { existsSync } from 'fs';
const version = '2.6.2'
const { platform, arch } = process


const [moduleName, _] = getNativeBinding(platform, arch);
const storingDir = join(envPaths('resvg').data, version);
const storingPath = join(storingDir, moduleName);
if (!existsSync(storingPath)){
  throw new Error('Resvg native module not found: ' + storingPath);
}

export const { BBox, Resvg, RenderedImage, renderAsync} = require(storingPath)
