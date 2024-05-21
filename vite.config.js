import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType:'autoUpdate',
      injectRegister:'auto',
      workbox:{
        globPatterns:['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        cleanupOutdatedCaches:false,
        runtimeCaching:[
          {
            urlPattern: /\/api\/.*\/*.json/,
            handler:'NetworkOnly',
            options:{
              backgroundSync:{
                name:'my-queue',
                options:{
                  maxRetentionTime:24*60
                }
              }
            }
          }
        ]
      },
      manifest:{
        name:'Prueba PWA',
        short_name:'prueba',
        description:'app example pwa with vue',
        theme_color:'#52a8fa',
        background_color:'#52a8fa',
        display:'standalone',
        icons:[
          {
            src:'images/hospital-1.png',
            sizes:'128x128',
            type:'image/png'
          },
          {
            src:'images/hospital-2.png',
            sizes:'256x256',
            type:'image/png'
          },
          {
            src:'images/hospital-3.png',
            sizes:'512x512',
            type:'image/png'
          },
        ]
      },

    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
