<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<template>
  <main class="home-hero">
    <p class="eyebrow">AI PRODUCT PLAYBOOK · 2026</p>
    <h1>AI 产品经理<br />实践手册</h1>
    <p class="subtitle">关于 AI 产品、Agent 系统与 AI Native 协作的持续现场笔记。</p>
    <p class="intro">不追逐模型新闻，也不提供万能答案。这里记录把 AI 放进真实任务、真实协作与责任边界后，如何形成判断、验证判断，再修正判断。</p>
    <div class="home-tags" aria-label="内容主题">
      <span>产品判断</span>
      <span>Agent 系统</span>
      <span>AI Native 协作</span>
    </div>
    <div class="home-links">
      <a class="start" :href="withBase('/product-notes/01-task-ai-vs-relationship-ai')">从第一章开始 <span aria-hidden="true">→</span></a>
      <a class="directory-link" href="#contents">按目录浏览 <span aria-hidden="true">↓</span></a>
      <a class="github-link" href="https://github.com/yaowenhu-uestc/ai-product-playbook">GitHub <span aria-hidden="true">↗</span></a>
    </div>
    <VisitStats />
  </main>
</template>
