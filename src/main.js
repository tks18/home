import Vue from 'vue'
import App from './App.vue'
import state from './plugins/state';
import EventBus from './EventBus';
import router from './router';
import vuetify from './plugins/vuetify';
import '@/styles/register.scss';

Vue.config.productionTip = false;
Vue.prototype.$bus = EventBus;
Vue.prototype.$state = state

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
