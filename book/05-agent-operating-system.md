---
layout: chapter
title: Agent 产品操作系统
part: 第二部 Agent 产品的基本系统
chapter: 05
deck: Agent 不是更会聊天的模型，而是一套能进入真实任务、工具和责任边界的任务系统。
previous: /book/04-product-judgment-fieldwork/
previous_title: 04 AI 产品判断从现场开始
next: /book/06-workflow-evaluation-recovery/
next_title: 06 任务流、评估与恢复
---

## 判断

一个可用 Agent 至少要同时设计六层：Context、Tool、Permission、Workflow、Evaluation、Memory。少任何一层，都可能在真实任务中失效。

| 层 | 要回答的问题 |
| --- | --- |
| Context | 它现在应知道什么？ |
| Tool | 它能实际做什么？ |
| Permission | 哪些动作需要确认？ |
| Workflow | 如何从输入走到交付？ |
| Evaluation | 如何证明它做对了？ |
| Memory | 什么值得跨任务保留？ |

## 方法

从一个明确目标开始，先写成功标准，再列必要上下文和工具，最后补充权限、失败恢复与评测样例。不要先做一个万能聊天入口。

## 边界

模型输出只是中间产物。用户真正购买的是被可靠完成的任务，而不是一次漂亮回答。
