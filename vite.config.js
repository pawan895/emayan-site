import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react"; // Import the React plugin

export default defineConfig({
  plugins: [tailwindcss(), react()], // Use the React plugin correctly
});
