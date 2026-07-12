<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import SidebarToggle from "./components/SidebarToggle.vue";
</script>

<template>
  <component :is="DefaultTheme.Layout">
    <template #nav-bar-content-after><SidebarToggle /></template>
  </component>
</template>
