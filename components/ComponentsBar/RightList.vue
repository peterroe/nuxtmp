<script setup lang="ts">

</script>

<template>
  <div overflow-auto px-3 class="right-list" b-l="1px solid #ddd">
    <div v-for="it, i in 10" :key="it" class="item-demo" m-4 text-center leading-20 h-20 rounded>
      DEMO-ITEM-{{ i }}
    </div>
  </div>
</template>

<style scoped>
.item-demo {
  background-color: #eee;
  border: 1px dashed #84a98c;
  color: #4b746e;
}
.right-list {
  background-color: #fdfdfd;
}
</style>
