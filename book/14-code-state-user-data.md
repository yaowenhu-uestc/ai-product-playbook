---
layout: chapter
title: 代码、状态与用户数据
part: 第四部 可靠性、安全与工程纪律
chapter: 14
deck: Agent 工作目录天然混合了代码、运行状态、用户数据与凭证；将它们混在一次提交里，是隐私与可维护性的共同风险。
previous: /book/13-infra-credentials-permissions/
previous_title: 13 基础设施、凭证与权限
next: /book/15-reply-guarantee-broadcast/
next_title: 15 必回复与广播可靠性
---

## 方法

把四类资产分开：代码进入版本管理；状态有可重建或备份策略；用户数据按最小访问保存；凭证只留在受限配置中。发布时采用白名单复制，而不是在混杂目录上赌 `.gitignore`。

## 判断

版本管理不只是保存代码，也是界定什么能公开、什么可以恢复、什么必须隔离的产品能力。

## 清单

- 提交前是否扫描密钥与本地数据库？
- 是否能从干净仓库重建运行环境？
- 是否能解释每类数据的保留和删除策略？
