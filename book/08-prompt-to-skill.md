---
layout: chapter
title: 从 Prompt 到 Skill
part: 第二部 Agent 产品的基本系统
chapter: 08
deck: Prompt 是起点；被反复验证的 Prompt，应升级为 Workflow、Skill 或带状态的 Agent。
previous: /book/07-permission-and-handoff/
previous_title: 07 权限与人机交接
next: /book/09-team-memory/
next_title: 09 Team Memory
---

## 判断

一次性提问是 Prompt；稳定复用是模板；需要多步骤判断是 Workflow；需要固定资料、脚本或工具时才是 Skill。不要为一次任务过早抽象。

## 方法

每个 Prompt 先写角色、任务、背景、输入、输出格式、约束与判断标准。收集真实样本，分析错例，再决定是否固化为 Skill。结构化编码也遵循同一纪律：需求、设计、任务、实现逐层确认。

## 边界

Prompt 变长不代表变好。无法解释的堆叠指令会掩盖缺失的 Context、工具或验收标准。
