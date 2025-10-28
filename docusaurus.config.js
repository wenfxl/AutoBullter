module.exports = {
  title: '轩灵自动驾驶教程',
  tagline: '安装与使用指南',
  url: 'https://your-domain.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',        // 文档目录
          routeBasePath: '/',  // 根目录显示文档
          sidebarPath: undefined // 自动生成侧边栏
        },
      },
    ],
  ],
};
