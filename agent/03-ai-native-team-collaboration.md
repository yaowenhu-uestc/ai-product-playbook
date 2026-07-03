# AI Native Team 协作基础设施

## 结论

AI Native Team 的核心优势，不是团队里用了多少 AI 工具，而是能不能持续降低 Team Context Friction。

我的判断是，团队协作里的 AI 机会不只在“帮人搜索知识”，而在于：

> 让 AI 持续理解团队状态，并在合适的时间推动 Workflow。

这类系统更接近 Organization AI。它不是飞书、GitHub、Linear、Claude Code 或 Codex 的替代品，而是站在这些工具之上的上下文和协作层。

## 哪些内容值得沉淀

| 值得沉淀 | 不值得沉淀 |
| --- | --- |
| AI Native Team 的协作假设 | 具体聊天原文 |
| Team Memory、Organization State、Workflow 的关系 | 公司内部项目细节 |
| 小团队验证 AI 协作方式的方法 | 真实人名、薪资、融资、简历隐私 |
| Decision、Goal、Context、Learning 的记录框架 | 一次性讨论和情绪表达 |
| 从内部实验到产品化的验证路线 | 未验证的宏大愿景 |

## 1. 问题不是知识太少，而是上下文无法持续传递

当 Claude Code、Codex、GPT 等工具进入日常工作后，一个新的问题会出现：

AI 很强，但它不天然认识团队。

它不知道：

| 缺失 Context | 影响 |
| --- | --- |
| 为什么这样设计产品 | 容易给出泛化建议 |
| 昨天的决策是什么 | 重复讨论同一个问题 |
| 某个方案为什么被否决 | 再次提出已经排除的路径 |
| 当前最重要的目标是什么 | 优先级判断偏离团队状态 |
| 谁负责什么 | 推动 Workflow 时找不到责任边界 |

团队成员之间也有类似问题：新人 Onboarding 慢，产品、研发、设计之间存在信息差，决策背景容易丢失，同一个问题需要反复解释。

所以真正要解决的不是“知识库不够大”，而是：

> Context 不能在团队、工具和 AI 之间稳定传递。

## 2. 从 Knowledge Base 到 Organization State

传统知识库管理的是文档，AI Native Team 更应该管理状态。

| 类型 | 管理对象 | 典型问题 |
| --- | --- | --- |
| Knowledge Base | 文档、资料、链接 | 资料在哪里 |
| Team Memory | 决策、经验、长期背景 | 为什么当初这样决定 |
| Organization State | 目标、项目、责任、风险、进度 | 现在团队应该做什么 |

Organization State 至少包括：

| 模块 | 需要回答的问题 |
| --- | --- |
| Goal | 当前最重要的目标是什么 |
| Project | 每个项目做到哪里，阻塞是什么 |
| Decision | 团队决定了什么，为什么 |
| People | 谁负责什么，谁需要被同步 |
| Timeline | 关键节点和变化发生在什么时候 |
| Risk | 当前最大的风险是什么 |
| Permission | 哪些动作可以自动做，哪些需要确认 |
| Memory | 哪些信息未来还会被反复使用 |

产品判断：

> AI 协作系统的核心不是让 AI 会搜文档，而是让 AI 理解团队此刻的状态。

## 3. Memory 不是记录一切，而是 Knowing Enough

Team Memory 不应该变成“把所有聊天都存起来”。记录越多，不等于上下文越好。

更好的原则是：

> 只记录未来仍然会影响判断的信息。

| 层级 | 是否沉淀 | 示例 | 生命周期 |
| --- | --- | --- | --- |
| Working Layer | 不沉淀 | 临时讨论、普通 Commit、一次性改文案 | 当天或当前任务 |
| Project Memory | 需要沉淀 | 重要方案取舍、项目决策、关键风险 | 项目周期 |
| Organization Memory | 长期沉淀 | 团队原则、协作规则、长期产品判断 | 长期有效 |

判断标准很简单：

| 问题 | 如果答案为是 |
| --- | --- |
| 未来还会有人问这件事吗 | 进入 Candidate Memory |
| 它会影响后续产品或技术判断吗 | 进入 Project Memory |
| 它会影响团队长期协作方式吗 | 进入 Organization Memory |
| 它只是当前任务的临时信息吗 | 保留在 Working Layer |

## 4. Team Memory 应该记录什么

Team Memory 最小结构可以从五类信息开始：

| 类型 | 要记录什么 | 例子 |
| --- | --- | --- |
| Decision | 决定了什么，为什么，放弃了什么 | 采用 A，不采用 B，因为当前阶段更重视交付速度 |
| Goal | 当前目标、指标、时间边界 | 两周内验证某个 Workflow 是否有效 |
| Context | 背景、用户、约束、前置事实 | 这个问题为什么值得解决 |
| Trade-off | 取舍逻辑和代价 | 牺牲部分完整性，换取更快验证 |
| Learning | 做错了什么，下次避免什么 | 某类同步方式成本太高，不再作为默认流程 |

它不是日报，也不是会议纪要，而是决策和协作的可复用上下文。

## 5. AI 维护 Memory 的方式

更合理的流程不是“人类写总结，AI 帮忙存档”，而是：

> AI 起草，人类确认。

```text
飞书 / GitHub / Issue / PRD / 会议
-> AI 观察变化
-> AI 生成 Candidate Memory
-> 负责人确认或修改
-> 写入 Team Memory
-> 后续 Workflow 自动调用
```

| 环节 | AI 负责 | 人负责 |
| --- | --- | --- |
| 观察 | 从文档、代码、讨论中发现变化 | 提供必要权限 |
| 提炼 | 生成 Candidate Memory | 判断是否值得记 |
| 分类 | 区分 Decision、Goal、Context、Learning | 修正分类错误 |
| 写入 | 更新 Team Memory | 确认敏感边界 |
| 调用 | 在任务中引用相关记忆 | 判断是否采纳建议 |

产品判断：

> Memory-as-Governance 比 Memory-as-Search 更重要。记忆不只是回答问题，还会影响 AI 下一步怎么行动。

## 6. 从 Memory 到 Workflow

很多产品会停在“AI 能帮我找历史信息”。但团队协作的更高价值在于：AI 能不能基于团队状态推动下一步。

| 阶段 | AI 能力 | 价值 |
| --- | --- | --- |
| Search | 找到相关文档 | 降低查找成本 |
| Memory | 解释历史决策 | 降低重复沟通 |
| State | 理解当前目标和项目状态 | 降低判断成本 |
| Workflow | 主动推动下一步 | 降低协作摩擦 |
| Execution | 调用工具完成动作 | 提高交付效率 |

例如，新人 Onboarding 不应该只是“这里有一堆资料”，而应该是：

| 传统 Onboarding | AI Native Onboarding |
| --- | --- |
| 新人阅读几十篇文档 | AI Buddy 给出当天任务 |
| 自己判断先看什么 | 按角色、权限和项目状态排序 |
| 不知道完成标准 | 每一步都有验收条件 |
| 遇到问题问同事 | AI 先解释背景，必要时再找人 |
| 文档读完就结束 | 完成任务后自动进入下一步 |

## 7. Team Playbook 要写职责，不写岗位说明书

AI Native Team 需要让人和 AI 都理解“谁负责什么”。这不是传统岗位说明书，而是可执行的 Team Playbook。

| 角色 | 负责 | 典型输出 | 不负责 |
| --- | --- | --- | --- |
| Product | Goal、用户、Priority、Decision | PRD、目标、决策记录 | 每个像素和每行代码 |
| Engineering | 工程质量、架构、Review、Deploy | Repo、PR、Release | 模糊需求的最终取舍 |
| Design | Design System、体验、品牌一致性 | Design Assets、交互规范 | 业务优先级 |
| Growth | 渠道、转化、实验、反馈 | 实验记录、数据复盘 | 产品核心价值定义 |
| AI | 总结、分类、提醒、候选 Memory、Workflow 推动 | Candidate Memory、任务建议、上下文补全 | 最终责任和高风险决策 |

产品判断：

> 当 AI 也参与协作时，职责边界必须被显式写出来，否则 AI 只会放大原有混乱。

## 8. 小团队更适合先验证

AI Native 协作方式不适合一开始就在大组织里铺开。大组织有安全、权限、法务、IT、培训和历史流程成本，协作方式的变化很难快速落地。

小团队的优势是：

| 优势 | 意义 |
| --- | --- |
| 决策链短 | 新 Workflow 可以当天试用 |
| 角色融合 | 产品、设计、研发更容易共同调整 |
| 工具切换成本低 | 可以快速试错 Claude Code、Codex、GitHub 等工具 |
| 反馈密度高 | 上下文摩擦是否降低很快能看出来 |
| 责任清晰 | 更容易判断某个 Workflow 是否真的有效 |

所以这类方向更适合先作为内部实验，而不是先做成完整产品。

## 9. 90 天内部实验

一个务实的验证方式，是把它定义成 90 天 AI Native Team 实验。

| 阶段 | 时间 | 验证目标 | 产出 |
| --- | --- | --- | --- |
| 个人 Memory | 第 1 周 | 单人 Memory Workflow 是否成立 | 个人 Decision / Learning 记录 |
| 双人协作 | 第 2-3 周 | 共享 Context 是否减少重复沟通 | 共享 Team Memory |
| 小团队试运行 | 第 4-8 周 | Decision Log、Candidate Memory、AI Onboarding 是否可用 | Team Playbook V0.1 |
| 复盘沉淀 | 第 9-12 周 | 哪些 Workflow 真实有效 | 可复用模板和评估指标 |

MVP 不一定需要开发新系统，可以先用现有工具组合验证：

| 工具 | 用途 |
| --- | --- |
| GitHub | 代码、Issue、Decision Mirror |
| 飞书 / 文档工具 | 团队文档和协作记录 |
| Claude Code / Codex | 代码、文档、Workflow 执行 |
| Markdown Team Memory | 低成本沉淀和版本管理 |
| 人工确认 | 控制敏感信息和错误写入 |

## 10. 调研时的四类产品

如果要继续看市场，不应只问“有没有人做 Memory”，而要区分它们解决的是哪一层问题。

| 类型 | 代表方向 | 主要价值 | 可能缺口 |
| --- | --- | --- | --- |
| 企业搜索 | 跨文档、Slack、知识库搜索 | 找到信息 | 不一定维护团队状态 |
| Team Memory | 自动沉淀团队历史 | 解释过去发生了什么 | 不一定推动 Workflow |
| AI Coworker | 在 Slack、GitHub、Linear 中协助执行 | 帮人做具体任务 | 不一定理解完整组织状态 |
| Memory Infrastructure | 为 Agent 提供 Memory SDK / Store | 给开发者提供记忆底座 | 不直接解决团队协作体验 |

我的判断是，真正的产品空白不一定是“再做一个 Memory”，而是：

> Memory -> Workflow -> Execution

也就是让 AI 从“记住团队”进一步走向“推动团队协作”。

## 11. 验证指标

AI Native Team 不能只看主观感觉，至少要观察这些指标：

| 指标 | 说明 |
| --- | --- |
| Context 重复解释次数 | 同一个背景被重复解释的频率是否下降 |
| 新人 Onboarding 时间 | 新人完成第一个有效任务的时间是否缩短 |
| Decision 可追溯率 | 关键决策是否能找到原因、取舍和责任人 |
| Candidate Memory 采纳率 | AI 提出的记忆有多少被人工确认 |
| Workflow 主动命中率 | AI 主动提醒或推动的任务是否真的有用 |
| 人工纠错率 | AI 写入或调用 Memory 时需要纠正的比例 |

如果这些指标没有改善，说明系统只是多了一层工具，而没有真正降低团队协作成本。

## 我的判断

AI Native Team 的竞争优势，不是“每个人都会用 AI”，而是团队能否把 AI 放进真实协作链路里。

短期看，它是 Team Memory、Decision Log、Onboarding AI 和 Team Playbook。

长期看，它可能是一层 Organization AI：持续维护团队状态，理解人、项目、目标、决策、风险和权限，并在合适的时间推动 Workflow。

但产品化之前，应该先在小团队内部验证：

1. Context Friction 是否真的下降。
2. Candidate Memory 是否真的被采用。
3. AI Onboarding 是否真的提升新人进入速度。
4. AI 主动推动 Workflow 是否有用，而不是打扰。

如果这套工作方式先让一个小团队变得更高效，再考虑把它做成软件，产品判断会更扎实。

## 相关

- [Team Memory 系统设计：压缩比记录更难](04-team-memory-compression.md)
- [长期在线 Agent 自动化的工程手记](05-always-on-agent-ops.md)
