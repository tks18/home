import Vue from 'vue';
import meta from 'vue-meta';
import App from './App.vue';
import store, { mutations, getters } from '@state';
import router from './router';
import moment from 'vue-moment';
import lodash from 'lodash';
import Notifications from 'vue-notification';
import axios from '@p/axios';
import vuetify from '@p/vuetify';
import { gsap } from 'gsap';
import '@styles/register.scss';
import wb from './registerServiceWorker';

Vue.use(moment);
Vue.use(Notifications);
Vue.use(meta, {
  refreshOnceOnNavigation: true,
});
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$worker = wb;
Vue.prototype.$gsap = gsap;
Vue.prototype.$bus = new Vue();
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
