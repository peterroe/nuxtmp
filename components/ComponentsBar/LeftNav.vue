<script setup lang="ts">
interface MenuItem {
  icon: string
  title: string
}
const currenFocus = ref('Space')
const menuList: MenuItem[] = [
  {
    icon: 'i-carbon-workspace',
    title: 'Space',
  },
  {
    icon: 'i-material-symbols-groups',
    title: 'Groups',
  },
  {
    icon: 'i-mdi-cog-outline',
    title: 'Setting',
  },
  {
    icon: 'i-mdi-bookmark',
    title: 'Mark',
  },
  {
    icon: 'i-carbon-software-resource-cluster',
    title: 'Other',
  },
]
const handleClickItem = (item: MenuItem) => {
  currenFocus.value = item.title
}

const handleClickIcon = () => {
  window.open('https://github.com/peterroe/nuxtmp')
}
</script>

<template>
  <div text-center flex flex-col justify-between bg-var-white>
    <ul>
      <li
        v-for="item in menuList"
        :key="item.icon"
        text-center
        m-4 py-1 mx-1
        hover="bg-var-green text-var-white"
        :class="{
          'bg-var-green text-var-white': currenFocus === item.title,
        }"
        cursor-pointer
        rounded
        @click="handleClickItem(item)"
      >
        <div my-2 mx-auto text-lg :class="item.icon" />
        <div text-xs>
          {{ item.title }}
        </div>
      </li>
    </ul>
    <div flex justify-center py-2 cursor-pointer hover="text-var-green">
      <div text-3xl i-mdi-github @click="handleClickIcon" />
    </div>
  </div>
</template>

<style scoped>

</style>
