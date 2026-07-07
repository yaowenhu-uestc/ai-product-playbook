# Agent

这里记录 Agent、Memory、Context、MCP、Workspace 等 AI 原生工作流实践。

## 已收录

| # | 主题 | 说明 |
| --- | --- | --- |
| 1 | [Agent 产品操作系统](01-agent-product-operating-system.md) | 从 Context、Tool、Permission、Workflow、Evaluation、Memory 六层设计 Agent 产品 |
| 2 | [Agent Workflow 与评估](02-agent-workflow-evaluation.md) | 从目标、Context、工具、权限和评估设计可执行 Agent Workflow |
| 3 | [AI Native Team 协作基础设施](03-ai-native-team-collaboration.md) | 从 Team Memory、Organization State 和 Workflow 设计团队级 AI 协作 |
| 4 | [Team Memory 系统设计：压缩比记录更难](04-team-memory-compression.md) | 三层决策模型、接受率毕业机制、静默原则与推拉时间结构 |
| 5 | [长期在线 Agent 自动化的工程手记](05-always-on-agent-ops.md) | 单机部署、告警、降级纪律、三层兜底、headless 认证、静默分支审计与本地→云端迁移 |
| 6 | [团队 IM 里的 AI 伙伴](06-team-chat-agent-design.md) | 人设、Context 分层、能力-安全边界与延迟四个产品变量 |
| 7 | [自动化的权限边界与最后一公里](07-automation-permission-last-mile.md) | UI 权限 ≠ API 权限：写入探测前置、降级梯度与失败不丢产物 |
| 8 | [半公开大屏：展示为主的团队状态可视化](08-ambient-team-display.md) | 环境信息屏的用户模型、自动轮播导演、信息量定拍长与"真人只说真话"隐私红线 |
| 9 | [知识推送的注意力路由：从摘要到点名](09-attention-routing-push.md) | 三行路由卡模板、Prompt 约束+代码守门、画像质量决定路由上限与静候期 |
| 10 | [团队 Bot 的必回复工程](10-bot-reply-guarantee.md) | "没回复"的五种故障分类、非文本兜底、Bot 自知边界、只救死不换血与合成事件验证 |
| 11 | [Agent 执行基础设施变更：凭证卫生与人机交接点](11-agent-infra-change-guardrails.md) | 最小权限铸造、组织资产与个人资产、404 掩盖权限陷阱、实时同步选型与人机交接点设计 |
| 12 | [把 Agent 代码纳入版本管理：代码、状态、用户数据、凭证的四层分离](12-versioning-agent-code-data-hygiene.md) | 工作目录是隐私高危区、白名单拷贝而非原地 gitignore、推送前密钥扫描与依赖只声明不打包 |
| 13 | [声明交接点还不够：Agent 驱动 UI 时，不可逆操作要有执行防线](13-enforcing-agent-handoff-gates.md) | 声明的交接点≠被机制守住的交接点、三条执行层防线、越界后如实交代的信任校准 |

## 规划中

| 主题 | 说明 |
| --- | --- |
| Memory | 长期记忆如何影响 AI 产品体验 |
| Context | 上下文管理的产品边界 |
| MCP | 工具连接层如何改变 AI 工作流 |
| Workspace | 项目级 AI 协作空间 |
