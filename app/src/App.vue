<script setup lang="ts">
  import { ref, onMounted } from "vue";

  const info = ref<string>("loading...");

  onMounted(async () => {
    const appInfo = await window.laneRush.getAppInfo();
    info.value = `${appInfo.platform} · v${appInfo.version}`;
  });
</script>

<template>
  <h1>Lane Rush</h1>
  <p>{{ info }}</p>
</template>
