import Vue from 'vue';
import meta from 'vue-meta';
import App from './App.vue';
import store, { mutations, getters } from './plugins/state';
import EventBus from './EventBus';
import router from './router';
import moment from 'vue-moment';
import lodash from 'lodash';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import vuetify from './plugins/vuetify';
import { gsap } from 'gsap';
import '@/styles/register.scss';
import 'swiper/swiper-bundle.css';

Vue.use(VueAwesomeSwiper);
Vue.use(moment);
Vue.use(meta, {
  tagIDKeyName: 'sh-tk-id',
  refreshOnceOnNavigation: true,
});
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$gsap = gsap;
Vue.prototype.$bus = EventBus;
Vue.prototype.$state = {
  store: store,
  mutate: mutations,
  get: getters,
};
Vue.prototype.$_ = lodash;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
