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
| 6 | [关系型 AI 的记忆时机与经济模型](product-notes/06-relationship-ai-memory-economics.md) | Meaningful Memory Trigger：记忆的 When 而非 What、共享情感锚点复用、为加速与表达而非亲密付费 |
| 7 | [把模型的短板设计成交互特性](product-notes/07-designing-around-model-limits.md) | 不与模型短板硬碰，用交互结构把不确定性挡在用户视线外，并随模型迭代重画能力线 |

### [agent/](agent/) — Agent、Memory、Context、Workflow 实践

| # | 文档 | 说明 |
| --- | --- | --- |
| 1 | [Agent 产品操作系统](agent/01-agent-product-operating-system.md) | 从 Context、Tool、Permission、Workflow、Evaluation、Memory 六层设计 Agent 产品 |
| 2 | [Agent Workflow 与评估](agent/02-agent-workflow-evaluation.md) | 可执行、可恢复、可评估的任务系统设计 |
| 3 | [AI Native Team 协作基础设施](agent/03-ai-native-team-collaboration.md) | Team Memory、Organization State 与 90 天内部实验 |
| 4 | [Team Memory 系统设计：压缩比记录更难](agent/04-team-memory-compression.md) | 三层决策模型、接受率毕业机制、静默原则与记忆生命周期 |
| 5 | [长期在线 Agent 自动化的工程手记](agent/05-always-on-agent-ops.md) | 单机部署、告警、降级纪律、三层兜底、headless 认证、静默分支审计与本地→云端迁移 |
| 6 | [团队 IM 里的 AI 伙伴](agent/06-team-chat-agent-design.md) | 人设、Context 分层、能力-安全边界与延迟：Bot 从工具到成员的四个产品变量 |
| 7 | [自动化的权限边界与最后一公里](agent/07-automation-permission-last-mile.md) | UI 权限 ≠ API 权限：写入探测前置、降级梯度与失败不丢产物 |
| 8 | [半公开大屏：展示为主的团队状态可视化](agent/08-ambient-team-display.md) | 环境信息屏的用户模型、自动轮播导演、信息量定拍长与"真人只说真话"隐私红线 |
| 9 | [知识推送的注意力路由：从摘要到点名](agent/09-attention-routing-push.md) | 三行路由卡模板、Prompt 约束+代码守门、画像质量决定路由上限与静候期 |
| 10 | [团队 Bot 的必回复工程](agent/10-bot-reply-guarantee.md) | "没回复"的五种故障分类、非文本兜底、Bot 自知边界、只救死不换血与合成事件验证 |
| 11 | [Agent 执行基础设施变更：凭证卫生与人机交接点](agent/11-agent-infra-change-guardrails.md) | 最小权限铸造、组织资产与个人资产、404 掩盖权限陷阱、实时同步选型与人机交接点设计 |
| 12 | [把 Agent 代码纳入版本管理：代码、状态、用户数据、凭证的四层分离](agent/12-versioning-agent-code-data-hygiene.md) | 工作目录是隐私高危区、白名单拷贝而非原地 gitignore、推送前密钥扫描与依赖只声明不打包 |
| 13 | [声明交接点还不够：Agent 驱动 UI 时，不可逆操作要有执行防线](agent/13-enforcing-agent-handoff-gates.md) | 声明的交接点≠被机制守住的交接点、三条执行层防线、越界后如实交代的信任校准 |
| 14 | [用嘴编程会腐烂：把 AI 编码变成有护栏的工程](agent/14-structured-vibe-coding.md) | 文档即上下文、需求→设计→任务→实现四步、监工-子 Agent 分层与每行代码配单测和类型检查 |
| 15 | [跨系统内容搬运的三个陷阱](agent/15-cross-system-content-migration.md) | 格式转换管道会静默丢富媒体、粗粒度权限推不出细粒度权限、分类体系缺类目时该扩展而非硬凑 |
| 16 | [会打架的虚拟形象：环境展示屏的间距工程与共享资源设计](agent/16-avatar-spacing-and-shared-attractions.md) | 布局常数要运行时测量而非设计时假设、包围盒相交检测取代圆形阈值、固定领地+有上限共享设施折中两难目标、素材云端引用取代二进制入库 |
| 17 | [小团队内部 AI 工具的采纳度量：覆盖率优先于频次](agent/17-adoption-metrics-small-team.md) | 覆盖率 N/M（谁没用过）优先于频次、<50% 先降摩擦、永久事件账 + 卡内实时计数、剔除 owner |
| 18 | [团队每日摘要：压缩纪律与署名纪律](agent/18-daily-digest-compression-attribution.md) | 20~30 秒扫读的硬上限、只留决策/风险/完成、宁可无名不可猜名、靠约定喂内容、卡内反馈信号 |
| 19 | [内部广播管道的三个可靠性坑](agent/19-broadcast-pipeline-reliability.md) | 无锁并发发重需去重锁、平台枚举字段要代码校验、真名默认脱敏、发送即记录消息 ID 以备撤回 |
| 20 | [展示屏的客户端状态漂移：代码里发什么 ≠ 客户端里存什么](agent/20-client-state-drift-kiosks.md) | 发布态与 localStorage 客户端态会静默漂移、编辑→写回种子→广播清缓存的固化闭环、三种收敛策略 |

### [prompts/](prompts/) — 可复用 Prompt

| # | 文档 | 说明 |
| --- | --- | --- |
| 1 | [从 Prompt 到 Workflow](prompts/01-prompt-to-workflow.md) | 产品分析、PRD 辅助、Agent 评估 Prompt 与调优流程 |
| 2 | [记忆筛选器 Prompt 模板](prompts/02-memory-filter-prompt.md) | 把团队每日事件流压缩成候选记忆；含冲突检测与早报"注意力路由器"变体 |
| 3 | [Playbook 更新判断清单](prompts/03-playbook-update-checklist.md) | 判断聊天内容是否值得更新到公开 Playbook，并给出执行 Prompt |
| 4 | [第三方集成接入自检 Prompt](prompts/04-third-party-integration-checklist.md) | 接入前确认凭证范围、归属、失败排查顺序、同步方式与人机交接点 |
| 5 | [结构化编码的四段式 Prompt 与生成编排的元 Prompt](prompts/05-spec-driven-coding-prompts.md) | 目标/输入/输出/步骤骨架、需求→设计→任务四步 Prompt 与生成监工编排的元 Prompt |
| 6 | [每日团队摘要生成 Prompt（压缩纪律 + 署名纪律）](prompts/06-daily-digest-prompt.md) | 20~30 秒扫读的硬上限、只留决策/风险/完成、不猜署名、脱敏与调优记录 |

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
