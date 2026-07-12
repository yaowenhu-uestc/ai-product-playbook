<script setup lang="ts">
import { onMounted, ref } from "vue";

const storageKey = "playbook-sidebar-collapsed";
const collapsed = ref(false);

const applyState = () => document.documentElement.classList.toggle("sidebar-collapsed", collapsed.value);

onMounted(() => {
  collapsed.value = localStorage.getItem(storageKey) === "true";
  applyState();
});

function toggleSidebar() {
  collapsed.value = !collapsed.value;
  localStorage.setItem(storageKey, String(collapsed.value));
  applyState();
}
</script>

<template>
  <button
    class="sidebar-toggle"
    type="button"
    :aria-label="collapsed ? '展开目录' : '收起目录'"
    :aria-pressed="collapsed"
    :title="collapsed ? '展开目录' : '收起目录'"
    @click="toggleSidebar"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h10M4 12h10M4 18h10M18 8v8M15 12h6" />
    </svg>
    <span>{{ collapsed ? "展开目录" : "收起目录" }}</span>
  </button>
</template>
