import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Form } from 'vant';
import { Field } from 'vant';

Vue.config.productionTip = false

var app = new Vue({
  render: h => h(App),router
})
// app.use(router)
Vue.use(Form);
Vue.use(Field);
app.$mount('#app')
