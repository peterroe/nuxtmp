import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/linshuheng/vscode/i/editor/node_modules/.pnpm/nuxt@3.3.1_qcr72c723if2sxlfnbsa57v4m4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}