<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import OutlineToggle from "./components/OutlineToggle.vue";
import SidebarToggle from "./components/SidebarToggle.vue";
</script>

<template>
  <component :is="DefaultTheme.Layout">
    <template #nav-bar-content-after>
      <SidebarToggle />
      <OutlineToggle />
    </template>
  </component>
</template>
