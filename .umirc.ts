import process from 'node:process'
import { defineConfig } from 'umi'
import { aesEncrypt } from './src/utils/crypto'

process.env.MPA_FILTER = process.argv[3] || process.env.MPA_FILTER
process.env.KEY = process.argv[4] || process.env.KEY || 'default'

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/tailwindcss',
    './plugins/mpa.ts',
  ],
  define: {
    PAGE: process.env.MPA_FILTER,
    KEY: process.env.KEY,
    KEY_ENCRYPTED: aesEncrypt(process.env.KEY),
    GA: process.argv[5] != undefined,
  },
  favicons: ['./static/favicon.ico'],
  publicPath: './',
  hash: true,
  mpa: {
    template: 'index.html',
    getConfigFromEntryFile: true,
    layout: '@/layouts/index.tsx',
  },
  copy: [],
  tailwindcss: {},
})
