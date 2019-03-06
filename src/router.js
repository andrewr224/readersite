import Vue from "vue"
import Router from "vue-router"
import Books from "./components/Books"
import About from "./components/About"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "books",
      component: Books
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
})
