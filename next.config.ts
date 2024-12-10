import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      // 開発環境でのみソースマップを有効にする
      config.devtool = "source-map";
    } else if (process.env.NODE_ENV === "production") {
      // 本番環境でソースマップを無効化
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
