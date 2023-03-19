<script setup lang="ts">

</script>

<template>
  <div overflow-auto px-3 bg-var-white b-l="1px solid #ddd">
    <div
      v-for="it, i in 10" :key="it"
      m-4 text-center leading-20 h-20 rounded text-var-green
      class="item-demo"
    >
      DEMO-ITEM-{{ i }}
    </div>
  </div>
</template>

<style scoped>
.item-demo {
  background-color: #eee;
  border: 1px dashed #84a98c;
}
</style>
