import { createHash } from 'node:crypto'
import path from 'node:path'
import { join } from 'node:path'
import process from 'node:process'
import { defineConfig } from 'umi'

process.env.MPA_FILTER = process.argv[3] || process.env.MPA_FILTER
process.env.KEY = process.argv[4] || process.env.KEY || 'default'

export default defineConfig({
  publicPath: './',
  plugins: ['./plugins/mpa.ts'],
  hash: true,
  mpa: {
    template: 'index.html',
    getConfigFromEntryFile: true,
  },
  copy: [],

})
