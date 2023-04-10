import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * @type {import('rollup').RollupOptions[]}
 */
const rollupConfig = [
  {
    external: [/dist/, /node_modules/],
    input: 'src/index.ts',
    output: { dir: 'dist', format: 'esm', preserveModules: true },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [['@babel/plugin-transform-runtime', { version: '^7.21.0' }]],
        presets: [
          ['@babel/preset-env', { browserslistEnv: 'production' }],
          '@babel/preset-typescript',
        ],
      }),
      nodeResolve({ extensions }),
      typescript({
        compilerOptions: {
          declarationDir: 'dist',
          emitDeclarationOnly: true,
          noEmit: false,
        },
        noForceEmit: true,
        tsconfig: 'tsconfig.build.json',
      }),
    ],
  },
  {
    external: [/dist/, /node_modules/],
    input: 'src/index.ts',
    output: { dir: 'dist/node', format: 'cjs' },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [['@babel/plugin-transform-runtime', { version: '^7.21.0' }]],
        presets: [
          ['@babel/preset-env', { browserslistEnv: 'node' }],
          '@babel/preset-typescript',
        ],
      }),
      nodeResolve({ extensions }),
    ],
  },
];

export default rollupConfig;
