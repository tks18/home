import Vue from 'vue';
import Router from 'vue-router';
import goTo from 'vuetify/es5/services/goto';
import loader from '@c/progress-loader';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;
    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }
    return goTo(scrollTo);
  },
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  loader.start();
  next();
});

router.afterEach(() => {
  loader.done();
});

export default router;
