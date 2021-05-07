import Vue from 'vue';

const state = Vue.observable({
  app: {
    online: true,
  },
  navbar: {
    active: false,
  },
  botSettings: {
    darkmode: false,
    navBlur: false,
  },
  backend: {
    progress: false,
    timing: 0,
  },
});

export const getters = {
  navbar: {
    key: () => state.navbar.key,
    active: () => state.navbar.active,
  },
  botSettings: {
    darkmode: () => state.botSettings.darkmode,
    navBlur: () => state.botSettings.navBlur,
  },
  backend: {
    progress: () => state.backend.progress,
    timing: () => state.backend.timing,
  },
};

export const mutations = {
  navbar: {
    key: (val) => (state.navbar.key = val),
    active: (val) => (state.navbar.active = val),
  },
  botSettings: {
    darkmode: (val) => (state.botSettings.darkmode = val),
    navBlur: (val) => (state.botSettings.navBlur = val),
  },
  backend: {
    progress: (val) => (state.backend.progress = val),
    timing: (val) => (state.backend.timing = val),
  },
};

export default state;
