<template>
  <div
    text="md"
    class="header"
    b-b="1px solid #ddd"
  >
    <div font="bold" text="lg">
      Nuxt3 TEMPLATE
    </div>
    <div flex gap-2>
      <div class="icon-wrapper-box">
        <div i-material-symbols-menu class="icon-size" />
        <div>Menu</div>
      </div>
      <div class="icon-wrapper-box">
        <div i-carbon-save class="icon-size" />
        <div>save</div>
      </div>
      <div class="icon-wrapper-box">
        <div i-mdi-share class="icon-size" />
        <div>Share</div>
      </div>
    </div>
    <!-- <div
      class="person-account"
      border="1px solid gray"
    >
      <div i-mdi-account text-md mr-2 text-2xl />
      peterroe
    </div> -->
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

}
.icon-wrapper-box {
  background-color: #3e756e;
  color: #fdfdfd;
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
