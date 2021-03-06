import Vue from "vue"
import App from "./App.vue"
import VeeValidate from "vee-validate"
import router from "./router"
import VModal from "vue-js-modal"

Vue.use(VeeValidate)
Vue.use(VModal)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
