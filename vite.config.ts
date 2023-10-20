/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import dns from "dns"
import path from "path"
import { env } from "process"
import { defineConfig } from "vite"
import { resolve } from 'path';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import reactRefresh from '@vitejs/plugin-react-refresh'

// Resolve localhost for Node v16 and older.
// @see https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder("verbatim")

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  plugins: [reactRefresh()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    api: 7001,
  },
  // Backwards-compat with Gatsby.
  // publicDir: "static",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        about: resolve(root, 'testnha', 'index.html'),
      }
    }
  },
  resolve: {
    alias: {
      gatsby: path.resolve(__dirname, "src/compat/gatsby-compat.tsx"),
      "@reach/router": path.resolve(
        __dirname,
        "src/compat/reach-router-compat.tsx"
      ),
    },
  },
  define: {
    __MEDUSA_BACKEND_URL__: JSON.stringify(
      env.MEDUSA_BACKEND_URL ||
      env.GATSBY_MEDUSA_BACKEND_URL ||
      env.GATSBY_STORE_URL ||
      ""
    ),
  },
  optimizeDeps: {
    exclude: ["typeorm", "medusa-interfaces"],
  },
})
