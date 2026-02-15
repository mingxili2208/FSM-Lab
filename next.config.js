/** @type {import('next').NextConfig} */
// 部署到 GitHub Pages 时需设置 BASE_PATH，例如 /FSM-Lab（与仓库名一致）
const basePath = process.env.BASE_PATH || '';
const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
