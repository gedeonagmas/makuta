import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import circleDependency from "vite-plugin-circular-dependency";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    circleDependency({
      outputFilePath: "./circleDep",
    }),
  ],
  define: {
    global: {},
  },
  // resolve: {
  //   alias: {
  //     web3: 'web3/dist/web3.min.js',
  //   },

  //   // or
  //   alias: [
  //     {
  //       find: 'web3',
  //       replacement: 'web3/dist/web3.min.js',
  //     },
  //   ],
  // },
});
