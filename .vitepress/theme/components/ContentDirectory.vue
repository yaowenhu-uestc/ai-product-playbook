<script setup lang="ts">
import { contentCount, contentGroups } from "../../generated/content-index";
</script>

<template>
  <section id="contents" class="content-directory">
    <p>CONTENTS · {{ contentCount }} 篇原文</p>
    <div v-for="group in contentGroups" :key="group.directory" class="content-group">
      <h2>{{ group.text }}</h2>
      <ul>
        <li v-for="item in group.items" :key="item.link"><a :href="item.link">{{ item.text }}</a></li>
      </ul>
    </div>
  </section>
</template>
