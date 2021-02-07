import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import minifyTheme from 'minify-css-string';

Vue.use(Vuetify);

let themecache = JSON.parse(localStorage.getItem('themecache'));

export default new Vuetify({
  theme: {
    dark: themecache == null ? false : themecache.dark,
    themes: {
      light: {
        primary: themecache == null ? '#F44336' : themecache.theme.accent,
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: themecache == null ? '#F44336' : themecache.theme.accent,
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
    options: {
      minifyTheme: minifyTheme,
      variations: false,
    },
  },
});
