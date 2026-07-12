<script setup lang="ts">
import { onMounted, ref } from "vue";

const total = ref("—");
const today = ref("—");
const counterUrl = "https://ai-product-playbook-counter.infidive-tv.workers.dev/count";

onMounted(async () => {
  try {
    const response = await fetch(counterUrl, { method: "POST" });
    if (!response.ok) return;
    ({ total: total.value, today: today.value } = await response.json());
  } catch {}
});
</script>

<template>
  <p class="visit-stats">累计阅读 <strong>{{ total }}</strong> 次　今日 <strong>{{ today }}</strong> 次</p>
</template>
