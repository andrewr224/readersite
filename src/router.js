import Vue from "vue"
import Router from "vue-router"
import List from "./components/List"
import About from "./components/About"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "list",
      component: List
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
})
