---
layout: default
title: AI Product Playbook
description: AI 产品经理的实践手册
---
<main class="home">
  <p class="eyebrow">AI PRODUCT PLAYBOOK · ONLINE BOOK</p>
  <h1>AI 产品经理的<br>实践手册</h1>
  <p class="subtitle">从模型能力到用户关系，从 Agent 系统到 AI Native 团队，建立一套能持续更新的产品判断与工作方法。</p>
  <p class="intro">这不是热点摘抄，也不是模型说明书。它记录的是如何把 AI 放进真实任务、真实协作与真实责任边界里，并在实践中不断修正判断。</p>
  <a class="start" href="{{ '/book/00-preface/' | relative_url }}">从序章开始阅读 →</a>
</main>
<section class="book-index">
  <p class="eyebrow">CONTENTS</p>
  <h2>全书目录</h2>
  {% for section in site.data.toc %}<div class="part"><h3>{{ section.title }}</h3><ul>{% for item in section.items %}<li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>{% endfor %}</ul></div>{% endfor %}
</section>
