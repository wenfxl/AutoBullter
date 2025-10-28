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
          path: 'docs',         // 指向 docs 目录
          routeBasePath: 'Install',   // 根目录显示文档
          sidebarPath: undefined // 使用 _category_.json 自动生成侧边栏
        },
      },
    ],
  ],
};
