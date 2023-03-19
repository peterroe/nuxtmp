<script setup lang="ts">
// const { data } = await useFetch('/api/pageview')
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
