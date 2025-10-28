module.exports = {
  title: '轩灵自动驾驶教程',
  tagline: '安装与使用指南',
  url: 'https://your-domain.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
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
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',           // 根路径
            to: '/Install/index', // 重定向目标
          },
        ],
      },
    ],
  ]
};
