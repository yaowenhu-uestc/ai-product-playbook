---
layout: chapter
title: 附录 A：可复用 Prompt
part: 附录
chapter: A
deck: Prompt 的质量取决于任务定义与判断标准，而不是修辞强度。
previous: /book/20-resource-system/
previous_title: 20 把资源组织成判断系统
next: /book/appendix-b-skills-evaluation/
next_title: 附录 B Skill 与评估
---

## 通用骨架

```text
角色：
任务：
背景与事实来源：
输入：
输出格式：
约束：
判断标准：
```

## 六类资产

| 类型 | 核心约束 |
| --- | --- |
| 产品分析 | 结论、场景、替代方案、风险 |
| 需求整理 | 缺失信息列为待确认，不编造事实 |
| Agent 评估 | Context、工具、权限、恢复、验证 |
| 记忆筛选 | 稳定性、未来价值、授权与过期规则 |
| 集成自检 | 凭证、scope、归属、写入探测、交接点 |
| 每日摘要 | 只保留决策、风险、完成，无法确认不署名 |

## 使用纪律

先用真实样本测试，再改写模板；当同一 Prompt 连续三次被复用且需要资料或工具时，再升级成 Skill。
