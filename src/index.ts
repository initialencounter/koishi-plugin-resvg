import { Context, Schema, Service } from 'koishi'
import {Resvg, renderAsync} from './resvg'
import type { ResvgRenderOptionsType, ResvgType, RenderedImage} from './type'
export const name = 'resvg'


declare module 'koishi' {
  interface Context {
    resvg: ReSvg
  }
}
class ReSvg extends Service {
  constructor(ctx: Context) {
    super(ctx, 'resvg', true)
  }
  async renderAsync(svg: string | Buffer, options?: ResvgRenderOptionsType, signal?: AbortSignal | null): Promise<RenderedImage>{
    return await renderAsync(svg, options, signal)
  }

  newResvg(svg: Buffer | string, options?: ResvgRenderOptionsType | null): ResvgType {
    return new Resvg(svg, options)
  }
}

namespace ReSvg {
  export const usage = 'A high-performance SVG renderer service'

  export interface Config {}

  export const Config: Schema<Config> = Schema.object({})
}


export default ReSvg
