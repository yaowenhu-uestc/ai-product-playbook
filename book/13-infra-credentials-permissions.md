---
layout: chapter
title: 基础设施、凭证与权限
part: 第四部 可靠性、安全与工程纪律
chapter: 13
deck: 第三方集成最危险的阶段，往往不是调用 API，而是凭证归属、权限范围和失败解释不清。
previous: /book/12-adoption-and-always-on-ops/
previous_title: 12 采纳与长期在线运营
next: /book/14-code-state-user-data/
next_title: 14 代码、状态与用户数据
---

## 判断

组织资产与个人资产必须分开。权限最小化、凭证可轮换、动作可追溯，是 Agent 接入真实系统的起点。

## 方法

接入前逐项确认：谁拥有凭证、需要什么 scope、失败时返回什么、数据如何同步、哪些动作需要人机交接。先做只读探测，再扩展到写入；把 404、401 等失败按权限与资源两条线排查。

## 边界

不要把个人 Token 写进仓库、镜像或教程。错误地扩大权限，比暂时无法自动化更难补救。
