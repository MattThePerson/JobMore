import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const proxied = { target: "http://localhost:3003", changeOrigin: true };

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": proxied,
      "/health-check": proxied,
      "/version": proxied,
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./testSetup.ts",
  },
});
