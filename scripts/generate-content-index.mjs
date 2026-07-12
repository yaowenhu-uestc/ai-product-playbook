import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const groups = [
  ["product-notes", "产品手记与产品判断"],
  ["agent", "Agent、Memory、Context、Workflow 实践"],
  ["prompts", "可复用 Prompt"],
  ["skills", "Skill 设计与评估"],
  ["learning", "学习方法与复盘"],
  ["resources", "外部资源组织方式"],
];

const titleOf = async (path) => {
  const markdown = await readFile(path, "utf8");
  return markdown.match(/^#\s+(.+)$/m)?.[1] ?? path.split("/").at(-1).replace(/\.md$/, "");
};

const contentGroups = await Promise.all(
  groups.map(async ([directory, text]) => {
    const files = (await readdir(directory))
      .filter((file) => file.endsWith(".md") && file !== "README.md")
      .sort((left, right) => left.localeCompare(right, "zh-CN", { numeric: true }));

    return {
      text,
      directory,
      items: await Promise.all(
        files.map(async (file) => ({
          text: await titleOf(resolve(directory, file)),
          link: `/${directory}/${file.replace(/\.md$/, "")}`,
        })),
      ),
    };
  }),
);

const total = contentGroups.reduce((sum, group) => sum + group.items.length, 0);
if (total === 0) throw new Error("未找到可发布的 Playbook 原文");

await mkdir(".vitepress/generated", { recursive: true });
await writeFile(
  ".vitepress/generated/content-index.ts",
  `// 由 scripts/generate-content-index.mjs 自动生成，请勿手动编辑。\nexport const contentGroups = ${JSON.stringify(contentGroups, null, 2)} as const;\nexport const contentCount = ${total};\n`,
);

console.log(`已索引 ${total} 篇原文。`);
