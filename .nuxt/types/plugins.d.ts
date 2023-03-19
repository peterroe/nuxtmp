// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.4.7_hmuptsblhheur2tugfgucj7gc4/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3").default> &
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.1_qcr72c723if2sxlfnbsa57v4m4/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.1_qcr72c723if2sxlfnbsa57v4m4/node_modules/nuxt/dist/head/runtime/plugins/vueuse-head-polyfill").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.1_qcr72c723if2sxlfnbsa57v4m4/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.1_qcr72c723if2sxlfnbsa57v4m4/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@0.2.5_nuxt@3.3.1/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../templates.pwa.client.b6d46dfe").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.2.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.2.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../unocss").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.1_qcr72c723if2sxlfnbsa57v4m4/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }