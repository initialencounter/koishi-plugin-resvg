const readFileSync = require('fs').readFileSync

function isMusl() {
  try {
    const lddPath = require('child_process').execSync('which ldd').toString().trim()
    return readFileSync(lddPath, 'utf8').includes('musl')
  } catch (e) {
    return true
  }
}

function getNativeBinding(platform, arch) {
  switch (platform) {
    case 'android':
      switch (arch) {
        case 'arm64':
          return ['resvgjs.android-arm64.node', '@resvg/resvg-js-android-arm64']
        default:
          throw new Error(`Unsupported architecture on Android ${arch}`)
      }
    case 'win32':
      switch (arch) {
        case 'x64':
          return ['resvgjs.win32-x64-msvc.node', '@resvg/resvg-js-win32-x64-msvc']
        case 'arm64':
          return ['resvgjs.win32-arm64-msvc.node', '@resvg/resvg-js-win32-arm64-msvc']
        case 'ia32':
          return ['resvgjs.win32-ia32-msvc.node', '@resvg/resvg-js-win32-ia32-msvc']
        default:
          throw new Error(`Unsupported architecture on Windows: ${arch}`)
      }
    case 'darwin':
      switch (arch) {
        case 'x64':
          return ['resvgjs.darwin-x64.node', '@resvg/resvg-js-darwin-x64']
        case 'arm64':
          return ['resvgjs.darwin-arm64.node', '@resvg/resvg-js-darwin-arm64']
        default:
          throw new Error(`Unsupported architecture on macOS: ${arch}`)
      }
    case 'freebsd':
      switch (arch) {
        case 'x64':
          return ['resvgjs.freebsd-x64.node', '@resvg/resvg-js-freebsd-x64']
        default:
          throw new Error(`Unsupported architecture on FreeBSD: ${arch}`)
      }
    case 'linux':
      if (isMusl()) {
        switch (arch) {
          case 'x64':
            return ['resvgjs.linux-x64-musl.node', '@resvg/resvg-js-linux-x64-musl']
          case 'arm64':
            return ['resvgjs.linux-arm64-musl.node', '@resvg/resvg-js-linux-arm64-musl']
          case 'arm':
            return ['resvgjs.linux-arm-musleabihf.node', '@resvg/resvg-js-linux-arm-musleabihf']
          default:
            throw new Error(`Unsupported architecture on Linux: ${arch}`)
        }
      } else {
        switch (arch) {
          case 'x64':
            return ['resvgjs.linux-x64-gnu.node', '@resvg/resvg-js-linux-x64-gnu']
          case 'arm64':
            return ['resvgjs.linux-arm64-gnu.node', '@resvg/resvg-js-linux-arm64-gnu']
          case 'arm':
            return ['resvgjs.linux-arm-gnueabihf.node', '@resvg/resvg-js-linux-arm-gnueabihf']
          default:
            throw new Error(`Unsupported architecture on Linux: ${arch}`)
        }
      }
    case 'riscv64':
      if (isMusl()) {
        return ['resvgjs.linux-riscv64-musl.node', '@resvg/resvg-js-linux-riscv64-musl']
      }else{
        return ['resvgjs.linux-riscv64-gnu.node', '@resvg/resvg-js-linux-riscv64-gnu']
      }
    case 's390x':
      return ['resvgjs.linux-s390x-gnu.node', '@resvg/resvg-js-linux-s390x-gnu']
    default:
      throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)
  }
}

module.exports = { getNativeBinding }
