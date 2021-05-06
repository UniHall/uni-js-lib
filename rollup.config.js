import { terser } from 'rollup-plugin-terser'

const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}
function capitalize(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}
const join = path.join

function getEntries(path) {
  const files = fs.readdirSync(resolve(path))
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      if (fs.existsSync(join(itemPath, item.toLowerCase() + '.js'))) {
        item = capitalize(item)
        ret[item] = resolve(join(itemPath, item.toLowerCase() + '.js'))
      }
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}

export default {
  input: {
    ...getEntries('src')
  },
  output: {
    dir: 'lib',
    format: 'amd',
    exports: 'named',
    name: 'UniJsLib',
    sourcemap: true
  },
  plugins: [
    terser()
  ]
}