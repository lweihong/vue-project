// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import App from './App'
import router from './router'

import MyUl from '@/components/common/My-ul'
import MyLi from '@/components/common/My-li'

// 配置axios
import Axios from 'axios'

Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)

// import { Swipe, SwipeItem } from 'mint-ui'

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)

Vue.use(MintUI)

// 配置公共请求地址
Axios.defaults.baseURL = 'localhost:8080'

Vue.prototype.$axios = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
