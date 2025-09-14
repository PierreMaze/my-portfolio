import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Garder les images avec un nom plus prévisible
          if (
            assetInfo.name &&
            /\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)
          ) {
            return "assets/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        },
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["react-icons"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
