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
const handeClickItem = (item: MenuItem) => {
  console.log(item.title)
}

const handleClickIcon = () => {
  window.open('https://github.com/peterroe/nuxtmp')
}
</script>

<template>
  <div text-center class="left-nav">
    <ul>
      <li
        v-for="item in menuList"
        :key="item.icon"
        text-center
        m-4
        py-1
        mx-1
        hover="bg-#3e756e text-#fdfdfd"
        :class="{
          'bg-#3e756e text-#fdfdfd': currenFocus === item.title,
        }"
        cursor-pointer
        rounded
        @click="handeClickItem(item)"
      >
        <div my-2 mx-auto text-lg :class="item.icon" />
        <div text-xs>
          {{ item.title }}
        </div>
      </li>
    </ul>
    <div flex justify-center py-2 cursor-pointer hover="text-#4b746e">
      <div text-3xl i-mdi-github @click="handleClickIcon" />
    </div>
  </div>
</template>

<style scoped>
.left-nav {
  background-color: #fdfdfd;
  @apply
    flex flex-col justify-between
}
</style>
