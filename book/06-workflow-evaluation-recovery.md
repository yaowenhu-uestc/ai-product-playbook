---
layout: chapter
title: 任务流、评估与恢复
part: 第二部 Agent 产品的基本系统
chapter: 06
deck: 能跑通一次不等于可交付。真实 Workflow 必须定义暂停、验证、失败保留与继续方式。
previous: /book/05-agent-operating-system/
previous_title: 05 Agent 产品操作系统
next: /book/07-permission-and-handoff/
next_title: 07 权限与人机交接
---

## 问题

多数 Agent 演示只描述成功路径；一旦工具失败、输入缺失或权限不足，任务状态就消失了。

## 判断

Workflow 的基本单位是可验证步骤，不是模型调用。每一步都应说明输入、动作、输出、验证方式和下一步责任人。

## 方法

建立最小评测集：真实输入、期望结果、必须包含项、不能包含项、需要工具和失败标准。每次改 Prompt 或工具后都回归，而非凭单次演示判断。

## 反例

“失败后重试”不是恢复策略。应保留已完成的中间产物，让用户或 Agent 从明确节点继续，而不重复产生外部副作用。
