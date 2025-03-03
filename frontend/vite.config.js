import { defineConfig } from "vite"
import { fileURLToPath, URL } from "url"
import postcss from "./postcss.config.js"
import react from "@vitejs/plugin-react"
import dns from "dns"
import { visualizer } from "rollup-plugin-visualizer"

dns.setDefaultResultOrder("verbatim")

// https://vitejs.dev/config/
export default defineConfig({
  // prevent vite from obscuring rust errors
  clearScreen: false,
  assetsInclude: [
    './public/piper/ort-wasm-simd-threaded.wasm',
    './public/piper/piper_phonemize.wasm',
    './public/piper/piper_phonemize.data',
  ],
  worker: {
    format: 'es'
  },
  server: {
    // Tauri expects a fixed port, fail if that port is not available
    strictPort: true,
    port: 3000,
    host: "localhost"
  },
  define: {
    "process.env": process.env
  },
  css: {
    postcss
  },
  plugins: [
    react(),
    visualizer({
      template: "treemap", // or sunburst
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: "bundleinspector.html" // will be saved in project's root
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url))
      },
      {
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "")
        }
      }
    ]
  },
  // Env variables starting with the item of `envPrefix` will be exposed in tauri's source code through `import.meta.env`.
  envPrefix: ['VITE_', 'TAURI_ENV_*'],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target:
      process.env.TAURI_ENV_PLATFORM == 'windows'
        ? 'chrome105'
        : 'safari13',
    // don't minify for debug builds
    minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_ENV_DEBUG,
    rollupOptions: {
      output: {
        // These settings ensure the primary JS and CSS file references are always index.{js,css}
        // so we can SSR the index.html as text response from server/index.js without breaking references each build.
        entryFileNames: 'index.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return `index.css`;
          return assetInfo.name;
        },
      },
      external: [
        // Reduces transformation time by 50% and we don't even use this variant, so we can ignore.
        /@phosphor-icons\/react\/dist\/ssr/,
      ]
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ["@mintplex-labs/piper-tts-web"],
    esbuildOptions: {
      define: {
        global: "globalThis"
      },
      plugins: []
    }
  }
})
