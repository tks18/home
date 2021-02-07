import Vue from 'vue';
import meta from 'vue-meta';
import App from './App.vue';
import store, { mutations, getters } from '@state';
import EventBus from '@eventbus';
import router from './router';
import moment from 'vue-moment';
import lodash from 'lodash';
import axios from '@p/axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import vuetify from '@p/vuetify';
import { gsap } from 'gsap';
import '@styles/register.scss';
import wb from './registerServiceWorker';

Vue.use(VueAwesomeSwiper);
Vue.use(moment);
Vue.use(meta, {
  tagIDKeyName: 'sh-tk-id',
  refreshOnceOnNavigation: true,
});
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$worker = wb;
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
