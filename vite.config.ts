import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Importação necessária

export default defineConfig({
  plugins: [react()], // Adicione esta linha
  base: "/ebd-iev/", // Substitua pelo nome EXATO do seu repositório

  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: process.env.DISABLE_HMR !== "true",
  },

  build: {
    outDir: "dist",
  },
});
