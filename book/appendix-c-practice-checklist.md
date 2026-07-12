---
layout: chapter
title: 附录 C：AI PM 实践清单
part: 附录
chapter: C
deck: 交付一个 AI 功能前，先确认它是否真的能在真实责任边界内完成任务。
previous: /book/appendix-b-skills-evaluation/
previous_title: 附录 B Skill 与评估
---

## 产品

- 用户目标和成功标准是否明确？
- 模型擅长与不擅长的边界是否被设计出来？
- 是否有最小可验证的用户场景？

## Agent

- Context、Tool、Permission、Workflow、Evaluation、Memory 是否齐全？
- 不可逆动作是否有真正生效的确认门？
- 失败后是否保留进度并给出可继续路径？

## 运营与安全

- 凭证、代码、状态和用户数据是否分离？
- 是否有日志、告警、对账与人工接管？
- 内容与数据是否满足公开、最小化与可删除原则？

## 最后一问

如果明天模型能力没有变化，这个系统是否仍因更清楚的任务、上下文、流程和责任边界而更有价值？如果答案是否定的，先回到问题本身。
