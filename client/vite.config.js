import { reactEasierViteConfig as revc_ } from "react-easier/vite-config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(revc_({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://lunch-connect-v7s2.vercel.app/",
        changeOrigin: true,
        secure: 'auto',
      },
      '/socket.io': {
        target: 'ws://lunch-connect-v7s2.vercel.app/',
        ws: true,
        changeOrigin: true,
      },
    },
    build: {
      outDir: "../client/dist",
    },
    ssr: {
      noExternal: ["react", "react-dom"],
    },
  })
);
