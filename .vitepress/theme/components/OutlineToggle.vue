<script setup lang="ts">
import { onMounted, ref } from "vue";

const storageKey = "playbook-outline-collapsed";
const collapsed = ref(false);

const applyState = () => document.documentElement.classList.toggle("outline-collapsed", collapsed.value);

onMounted(() => {
  collapsed.value = localStorage.getItem(storageKey) === "true";
  applyState();
});

function toggleOutline() {
  collapsed.value = !collapsed.value;
  localStorage.setItem(storageKey, String(collapsed.value));
  applyState();
}
</script>

<template>
  <button
    class="outline-toggle"
    type="button"
    :aria-label="collapsed ? '展开本页目录' : '收起本页目录'"
    :aria-pressed="collapsed"
    :title="collapsed ? '展开本页目录' : '收起本页目录'"
    @click="toggleOutline"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 6h10M7 12h10M7 18h10M5 8v8M3 12h5" />
    </svg>
  </button>
</template>
