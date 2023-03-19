<script setup lang="ts">
import { NButton } from 'naive-ui'
// https://github.com/peterroe/nuxtmp/generate
const handleClickIcon = () => {
  window.open('https://github.com/peterroe/nuxtmp')
}
</script>

<template>
  <div
    py-20 h-full flex-1 overflow-auto
    text-6xl
    text-shadow-lg
    my-0
    flex flex-col
    text="#264653"
    text-stroke-1
    items-center
    justify-center
    class="editor"
  >
    Create whatever you want here...
    <div mt-10 flex items-center>
      <NButton size="large" target="_blank" mr-2 rounded>
        <a href="https://github.com/peterroe/nuxtmp/generate">
          Get Started
        </a>
      </NButton>
      <NButton px-2 size="large" rounded @click="handleClickIcon">
        <div text-xl i-mdi-github />
      </NButton>
    </div>
  </div>
</template>

<style scoped>
.editor {
  background-color: #fdfdfd
}
</style>
