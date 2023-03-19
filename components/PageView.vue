<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider>
    <div flex justify-center h-screen text-xs>
      <ComponentsBar />
      <Editor />
      <ControlPane />
    </div>
  </NConfigProvider>
</template>

<style>

</style>
