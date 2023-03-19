<script setup lang="ts">
import { NInput } from 'naive-ui'
</script>

<template>
  <div pt-12 b-r="1px solid #ddd">
    <div
      b-b="1px solid #ddd"
      h-14 flex items-center py-3 pr-3
      bg-var-white
    >
      <div w-16>
        Demo
      </div>
      <div flex-1>
        <NInput
          placeholder="Search"
        >
          <template #suffix>
            <div i-carbon-search />
          </template>
        </NInput>
      </div>
    </div>
    <div class="bar-height">
      <ComponentsBarLeftNav w-15 />
      <ComponentsBarRightList flex-1 />
    </div>
  </div>
</template>

<style scoped>
.bar-height {
  height: calc(100vh - 6.5rem);
  @apply w-75 flex
}
</style>
