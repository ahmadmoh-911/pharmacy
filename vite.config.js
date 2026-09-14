import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Dev mode: the plugin stays active so `virtual:pwa-register` resolves,
      // but no service worker is generated/served (default behavior). This
      // avoids stale-bundle caching in dev while keeping the virtual module.
      devOptions: { enabled: false },
      includeAssets: ['icons/*.png', 'icons/*.svg'],
            manifest: {
              name: 'PharmaPro — Pharmacy Management',
              short_name: 'PharmaPro',
              description: 'Offline-first pharmacy management system with POS, inventory, accounts, and analytics.',
              theme_color: '#012d1d',
              background_color: '#F3FCEB',
              display: 'standalone',
              orientation: 'portrait-primary',
              scope: '/',
              start_url: '/',
              categories: ['medical', 'business'],
              icons: [
                { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
                { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
                { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
              ]
            },
            workbox: {
              globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
              runtimeCaching: [
                {
                  urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
                  handler: 'NetworkFirst',
                  options: {
                    cacheName: 'supabase-api',
                    networkTimeoutSeconds: 5,
                    expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 }
                  }
                },
                {
                  urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                  handler: 'CacheFirst',
                  options: {
                    cacheName: 'google-fonts-stylesheets',
                    expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
                  }
                },
                {
                  urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                  handler: 'CacheFirst',
                  options: {
                    cacheName: 'google-fonts-webfonts',
                    expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 }
                  }
                }
              ]
            }
    })
  ],
  server: { port: 5173 }
})
