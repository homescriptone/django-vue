import Vue from 'vue'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  beforeCreate(){
    Vue.prototype.$http = axios
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.defaults.xsrfCookieName = 'csrftoken'
  },
  render: h => h(App)
})

