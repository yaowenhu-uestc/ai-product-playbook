import { defineConfig } from "vitepress";
import { contentGroups } from "./generated/content-index";

export default defineConfig({
  lang: "zh-CN",
  title: "AI Product Playbook",
  description: "AI 产品经理的实践手册",
  base: "/ai-product-playbook/",
  cleanUrls: true,
  srcExclude: ["inbox/**", "README.md"],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "目录", link: "/#contents" },
      { text: "GitHub", link: "https://github.com/yaowenhu-uestc/ai-product-playbook" },
    ],
    sidebar: contentGroups.map(({ partLabel, items }) => ({ text: partLabel, items })),
    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    footer: { message: "MIT License", copyright: "© 2026 胡耀文" },
  },
});
