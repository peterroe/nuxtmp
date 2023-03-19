<template>
  <div
    class="header"
    b-b="1px solid #ddd"
  >
    <div font-bold text-lg>
      Nuxt3 TEMPLATE
    </div>
    <div flex gap-2>
      <div class="icon-wrapper-box" text-var-white bg-var-green>
        <div i-material-symbols-menu class="icon-size" />
        <div>Menu</div>
      </div>
      <div class="icon-wrapper-box" text-var-white bg-var-green>
        <div i-carbon-save class="icon-size" />
        <div>save</div>
      </div>
      <div class="icon-wrapper-box" text-var-white bg-var-green>
        <div i-mdi-share class="icon-size" />
        <div>Share</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color:#fdfdfd;
  @apply
    flex gap-3 justify-between
    fixed top-0 z-100
    h-12 w-full
    py-2 px-3
    text-md

}
.icon-wrapper-box {
  @apply
    py-1 px-3
    flex items-center
    cursor-pointer
    rounded

}
.icon-size {
  @apply text-md mr-2
}
.person-account {
  @apply flex items-center rounded pointer px-2
}
</style>
