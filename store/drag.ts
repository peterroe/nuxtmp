export const useDragStore = defineStore('drag', {
  state: () => {
    return {
      cursor: {
        offsetX: 0 as number,
        offsetY: 0 as number,
      },
    }
  },
})
