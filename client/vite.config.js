import { reactEasierViteConfig as revc_ } from "react-easier/vite-config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(
  revc_({
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:3000/",
          changeOrigin: true,
          secure: "auto",
        },
        "/socket.io": {
          target: "ws://127.0.0.1:3000/",
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
    },
  })
);
