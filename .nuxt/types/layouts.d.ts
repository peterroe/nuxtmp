import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "home"
declare module "/Users/linshuheng/vscode/i/editor/node_modules/.pnpm/nuxt@3.3.1_qcr72c723if2sxlfnbsa57v4m4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}