---
layout: chapter
title: 采纳与长期在线运营
part: 第三部 AI Native 团队如何运转
chapter: 12
deck: 小团队先看谁真正用过，而不是少数人用了多少次；长期在线系统先保证可恢复，再追求聪明。
previous: /book/11-attention-routing-digest/
previous_title: 11 注意力路由与每日摘要
next: /book/13-infra-credentials-permissions/
next_title: 13 基础设施、凭证与权限
---

## 判断

采纳率应优先看覆盖率 N/M：有多少目标用户完成过一次真实任务。若不足一半，先降低摩擦，别急着增加功能。

## 方法

保留永久事件账并在界面显示实时计数，剔除 owner 的自用数据。长期运行的 Agent 则准备监控、告警、降级、人工接管和发送前后对账；无事发生也要有健康信号。

## 边界

自动化不是无人值守。没有明确恢复路径的“全天在线”，只是把故障延后暴露。
