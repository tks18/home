import Vue from 'vue'
import App from './App.vue'
import store, { mutations, getters } from './plugins/state';
import EventBus from './EventBus';
import router from './router';
import lodash from 'lodash';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vuetify from './plugins/vuetify';
import '@/styles/register.scss';
import 'swiper/swiper-bundle.css'
 
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;
Vue.prototype.$bus = EventBus;
Vue.prototype.$state = {
  store: store,
  mutate: mutations,
  get: getters,
}
Vue.prototype.$_ = lodash;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
