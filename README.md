# AI Product Playbook

AI 产品经理的实践手册。

这个仓库不是 AI 新闻摘抄，也不是通用教程。它用于沉淀我作为 AI 产品经理 / AI 产品实践者，在学习、使用和设计 AI 产品时形成的判断、方法、Prompt、Agent Workflow 和产品手记。

核心假设：

> 下一代 AI 产品的竞争，会从模型能力逐渐转向用户模型、长期记忆、上下文管理和主动协作能力。

## 为什么做这个仓库

AI 产品变化太快，不适合写成固定教材。更适合用 Playbook 的方式持续迭代：

- 记录已验证的方法，而不是抽象观点
- 保留产品判断的演进过程
- 把 Prompt、Skill、Agent、MCP、Workflow 变成可复用资产
- 用 GitHub 作为长期作品集，而不是一次性内容发布平台

## 当前重点

| 方向 | 问题 |
| --- | --- |
| Relationship AI | AI 如何从一次性聊天变成长期关系 |
| Personal AI | 个人 AI 是否会成为 Chat 之后的新入口 |
| User Model | AI 如何持续理解一个具体的人 |
| Context Management | AI 产品如何管理上下文、记忆和任务状态 |
| AI PM Workflow | AI 产品经理如何用 AI 构建自己的工作系统 |

## 内容索引

每篇文档只在这里出现一次，按模块组织。各模块的收录标准见对应目录的 README。

### [product-notes/](product-notes/) — 产品手记与产品判断

| # | 文档 | 说明 |
| --- | --- | --- |
| 1 | [任务型 AI 与关系型 AI](product-notes/01-task-ai-vs-relationship-ai.md) | 从 Foundation Model 到 User Model 的机会判断 |
| 2 | [AI Product Playbook 的结构](product-notes/02-ai-product-playbook-structure.md) | 本仓库的定位、内容结构与更新节奏 |
| 3 | [把早期 AI 创业经历当成产品现场](product-notes/03-early-ai-startup-fieldwork.md) | 如何评估早期团队经历的真实价值 |
| 4 | [从第一性原理理解 Agent 产品](product-notes/04-agent-product-first-principles.md) | 把 Agent 理解为任务执行系统的完整框架 |
| 5 | [AI 产品经理能力地图](product-notes/05-ai-pm-capability-map.md) | 技术理解、产品设计、评估、商业与协作五个模块 |

### [agent/](agent/) — Agent、Memory、Context、Workflow 实践

| # | 文档 | 说明 |
| --- | --- | --- |
| 1 | [Agent 产品操作系统](agent/01-agent-product-operating-system.md) | 从 Context、Tool、Permission、Workflow、Evaluation、Memory 六层设计 Agent 产品 |
| 2 | [Agent Workflow 与评估](agent/02-agent-workflow-evaluation.md) | 可执行、可恢复、可评估的任务系统设计 |
| 3 | [AI Native Team 协作基础设施](agent/03-ai-native-team-collaboration.md) | Team Memory、Organization State 与 90 天内部实验 |
| 4 | [Team Memory 系统设计：压缩比记录更难](agent/04-team-memory-compression.md) | 三层决策模型、接受率毕业机制、静默原则与记忆生命周期 |
| 5 | [长期在线 Agent 自动化的工程手记](agent/05-always-on-agent-ops.md) | 单机部署、告警设计、分阶段重试与查事实源的排障方法 |
| 6 | [团队 IM 里的 AI 伙伴](agent/06-team-chat-agent-design.md) | 人设、Context 分层、能力-安全边界与延迟：Bot 从工具到成员的四个产品变量 |
| 7 | [自动化的权限边界与最后一公里](agent/07-automation-permission-last-mile.md) | UI 权限 ≠ API 权限：写入探测前置、降级梯度与失败不丢产物 |

### [prompts/](prompts/) — 可复用 Prompt

| # | 文档 | 说明 |
| --- | --- | --- |
| 1 | [从 Prompt 到 Workflow](prompts/01-prompt-to-workflow.md) | 产品分析、PRD 辅助、Agent 评估 Prompt 与调优流程 |
| 2 | [记忆筛选器 Prompt 模板](prompts/02-memory-filter-prompt.md) | 把团队每日事件流压缩成候选记忆；含冲突检测与早报"注意力路由器"变体 |
| 3 | [Playbook 更新判断清单](prompts/03-playbook-update-checklist.md) | 判断聊天内容是否值得更新到公开 Playbook，并给出执行 Prompt |

### [skills/](skills/) — Skill 设计与评估

| # | 文档 | 说明 |
| --- | --- | --- |
| 1 | [Skill 评估框架](skills/01-skill-evaluation-framework.md) | 八个评估维度、评分等级与 Skill 写作模板 |

### [learning/](learning/) — 学习方法与复盘

| # | 文档 | 说明 |
| --- | --- | --- |
| 1 | [早期 AI 创业观察日志模板](learning/01-ai-startup-fieldwork-log.md) | 每周记录真实学习，积累产品判断 |
| 2 | [AI 学习方法：先做，再补理论](learning/02-ai-learning-by-building.md) | 如何从信息输入转向实践输出 |
| 3 | [用 AI 写万字长文：先对齐，再动笔](learning/03-long-doc-alignment-before-writing.md) | 六个对齐问题、素材考古与作者声音保留 |

### [resources/](resources/) — 外部资源组织方式

| # | 文档 | 说明 |
| --- | --- | --- |
| 1 | [AI 产品资源地图](resources/01-ai-product-resource-map.md) | 按问题组织 AI 产品学习资源，而不是堆链接 |

## 更新原则

1. 先记录真实实践，再抽象方法。
2. 同一主题至少经历一次使用、一次复盘、一次改写，才沉淀为 Playbook。
3. 不追热点清单，只保留能影响产品判断和工作流的内容。
4. 所有内容都可以被后续版本推翻、合并或重写。

## License

MIT
