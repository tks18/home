import Vue from 'vue';
import meta from 'vue-meta';
import vueJsonLD from 'vue-jsonld';
import store, { mutations, getters } from '@state';
import moment from 'vue-moment';
import lodash from 'lodash';
import Notifications from 'vue-notification';
import axios from '@p/axios';
import vuetify from '@p/vuetify';
import { gsap } from 'gsap';
import VueGtag from 'vue-gtag';
import loader from '@c/progress-loader';
import router from './router';
import App from './App.vue';
import '@styles/register.scss';
import wb from './registerServiceWorker';

Vue.use(moment);
Vue.use(Notifications);
Vue.use(meta, {
  refreshOnceOnNavigation: true,
});
Vue.use(
  VueGtag,
  {
    config: { id: 'G-8HXX8G7931' },
    appName: 'Sudharshan TK - Portfolio Website',
    pageTrackerScreenviewEnabled: true,
  },
  router,
);
Vue.use(vueJsonLD);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$worker = wb;
Vue.prototype.$gsap = gsap;
Vue.prototype.$loader = loader;
Vue.prototype.$bus = new Vue();
Vue.prototype.$state = {
  store,
  mutate: mutations,
  get: getters,
};
Vue.prototype.$lodash = lodash;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
