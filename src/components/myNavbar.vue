<script setup lang="ts">
defineProps<{
  tasa: number
}>()
</script>
<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-primary text-xl">Fake Store</a>
    </div>
    <div class="flex-none">
      <div class="stats">
        <div class="stat py-0">
          <div class="stat-title">Tasa del día</div>
          <div class="stat-value flex justify-center text-base font-semibold">{{ tasa }} Bs</div>
        </div>
      </div>
    </div>
  </div>
</template>
