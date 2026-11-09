import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Next 15.5 bündelt die Dev-Overlay-Module (ca. 217 kB gzip) in den Client-Build, obwohl alle Aufrufer mit
  // NODE_ENV-Prüfungen geschützt sind. In Produktions-Builds werden sie durch ein leeres Modul ersetzt.
  webpack(config, { dev, isServer, webpack }) {
    if (!dev && !isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/next-devtools/, path.resolve(__dirname, "lib/empty.js")),
      );
    }
    return config;
  },
};

export default nextConfig;
