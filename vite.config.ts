import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  build: {
    outDir: "build",
  },
  plugins: [react()],
});