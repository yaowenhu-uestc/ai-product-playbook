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
    nav: [{ text: "GitHub", link: "https://github.com/yaowenhu-uestc/ai-product-playbook" }],
    sidebar: contentGroups.map(({ text, items }) => ({ text, items })),
    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    editLink: {
      pattern: "https://github.com/yaowenhu-uestc/ai-product-playbook/edit/main/:path",
      text: "在 GitHub 编辑此页",
    },
    footer: { message: "MIT License", copyright: "AI Product Playbook" },
  },
});
