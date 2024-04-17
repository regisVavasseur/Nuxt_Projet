import { defineNuxtConfig } from "nuxt/config";
import vuetify,{transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-server-utils',
  ],
  nitro: {
    experimental: {
      websocket: true
    },
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})