import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import "virtual:windi.css"
import routes from "virtual:generated-pages"
import { RouterScrollBehavior } from "vue-router"
import "~/assets/styles/style.scss"
import "@purge-icons/generated"


const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  else return { top: 0, behavior: "smooth" }
}

export const createApp = ViteSSG(App, { routes, scrollBehavior }, (ctx) => {
  Object.values(import.meta.globEager("./module/*.ts")).map((i) => i.install?.(ctx))
})
