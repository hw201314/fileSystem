import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vitepress";
import flexSearchIndexOptions from "flexsearch";
export default {
  //搜索插件 https://www.npmjs.com/package/vitepress-plugin-search
  //选项设置 https://github.com/nextapps-de/flexsearch#options
  vite: {
    plugins: [
      SearchPlugin({
        ...flexSearchIndexOptions,
        previewLength: 120, //搜索结果预览长度
        buttonLabel: "搜索",
        placeholder: "输入关键词",
        tokenize: "full",
      }),
    ],
  },
  title: "文档名称",
  base: "/fileSystem/",
  head: [["link", { rel: "icon", href: "/fileSystem/logo.ico" }]],
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // search: {
    //   provider: 'local',
    //   option:{
    //     previewLength: 120
    //   }
    // },
    // search: {
    // see https://vitepress.dev/reference/default-theme-search
    // provider: 'local'
    // provider: 'algolia',
    // options: {
    //   appId: 'P0xxxxxxQ5',
    //   apiKey: 'cc79aexxxxxxxxxxe21a489d034',
    //   indexName: 'Acrixx'
    // }
    // },
    returnToTopLabel: "返回顶部",
    outline: {
      level: "deep",
      label: "目录", // 右侧大纲标题文本配置
    },
    // socialLinks: [{ icon: "github", link: "https://github.com/FnTop/Acri" }],
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    lastUpdatedText: "上次更新",
    footer: {
      message: "Released 1.3.0 ",
      copyright: "Copyright © 2023 Acri",
    },
    nav: [
      // { text: "首页", link: "/" },
      { text: "文档", link: "/mulu1/" },
      { text: "文档2", link: "/mulu2/" },
      // { text: 'crawler', link: '/mulu1/crawler' },
      {
        text: "项目",
        items: [
          {
            text: "项目1",
            link: "/mulu1/",
          },
          {
            text: "项目2",
            link: "/mulu2/",
          },
        ],
      },
    ],
    sidebar: {
      "/mulu1/": [
        {
          text: "目录",
          items: [
            { text: "文档1", link: "/mulu1/" },
            { text: "版本日志", link: "/mulu1/version" },
          ],
        },
      ],
      "/mulu2/": [
        {
          text: "目录",
          items: [
            { text: "文档2", link: "/mulu2/" },
            { text: "版本日志", link: "/mulu2/version" },
          ],
        },
      ],
    },
    docFooter: { prev: "上一篇", next: "下一篇" },
  },
  markdown: {
    lineNumbers: true, // 显示行号
  },
};
