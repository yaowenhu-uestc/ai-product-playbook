<script setup lang="ts">
import { onMounted, ref } from "vue";

const total = ref("");
const today = ref("");
const status = ref<"loading" | "loaded" | "error">("loading");
const counterUrl = "https://ai-product-playbook-counter.infidive-tv.workers.dev/count";

onMounted(async () => {
  try {
    const response = await fetch(counterUrl, { method: "POST" });
    if (!response.ok) throw new Error("访问统计请求失败");
    const data = await response.json();
    total.value = String(data.total);
    today.value = String(data.today);
    status.value = "loaded";
  } catch {
    status.value = "error";
  }
});
</script>

<template>
  <p class="visit-stats" aria-live="polite">
    <template v-if="status === 'loaded'">累计访问 <strong>{{ total }}</strong> 次　今日访问 <strong>{{ today }}</strong> 次</template>
    <template v-else-if="status === 'loading'">访问统计加载中</template>
    <template v-else>访问统计暂不可用</template>
  </p>
</template>
