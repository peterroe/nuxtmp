<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="area">
    <div i-mdi-label-variant inline-block mr-1 /> {{ props.title }}
  </div>
  <div p-3 class="area-body" rounded="xl">
    <slot />
  </div>
  <div i-mdi-triangle-down-outline text="#54736e" mx-auto />
</template>

<style scoped>
.area {
  color: #4b746e;
  border-top: 1px dashed #4b746e;
  @apply
    font-bold pt-4 my-4 h-8 px-2 leading-8  rounded-xl
    text-left text-lg
    flex items-center
    color-#4b746e
}
</style>
