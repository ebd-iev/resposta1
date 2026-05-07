import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/resposta1/", // Certifique-se de que o nome é o do repositório no GitHub
  
  build: {
    outDir: "dist",
  },
});
