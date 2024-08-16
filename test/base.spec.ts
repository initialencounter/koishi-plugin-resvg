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

