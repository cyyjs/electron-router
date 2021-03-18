import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from "rollup-plugin-terser"
import path from 'path'

const plugins = [
  typescript({
    tsconfig: 'tsconfig.json',
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache')
  }),
  resolve({ preferBuiltins: true }),
  commonjs(),
  terser()
]

clear({
  // required, point out which directories should be clear.
  targets: ['lib'],
  // optional, whether clear the directores when rollup recompile on --watch mode.
  watch: true, // default: false
})

const list = ['index', 'client', 'server'].map(name => {
  return {
    input: `./src/${name}.ts`,
    plugins,
    output: {
      format: 'es',
      file: `lib/${name}.js`,
    },
    external: ['electron']
  }
})
export default list
