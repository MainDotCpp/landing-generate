import process from 'node:process'
import { defineConfig } from 'umi'

process.env.MPA_FILTER = process.argv[3] || process.env.MPA_FILTER
process.env.KEY = process.argv[4] || process.env.KEY || 'default'

export default defineConfig({
  plugins: ['./plugins/mpa.ts', '@umijs/plugins/dist/tailwindcss'],
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
