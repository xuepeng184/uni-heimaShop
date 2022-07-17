import App from './App'

import {myRequest} from './utils/api'
Vue.prototype.$myRequest=myRequest
Vue.filter('formatDate',(date)=>{
	const newDate=new Date(date)
	const year=newDate.getFullYear();
	const month=newDate.getMonth()+1;
	const day=newDate.getDay()
	return year+'-'+month+'-'+day
})
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif