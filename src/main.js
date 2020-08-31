// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import * as VueGoogleMaps from 'vue2-google-maps'
import VideoBg from 'vue-videobg'

Vue.use(vueSmoothScroll);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyATXsOvtlNy-Lx_bjC-VfvUAICk0MzQ7Rs',
    libraries: 'places',
  },
});

Vue.component('video-bg', VideoBg);

Vue.config.productionTip = false;

Vue.prototype.$scrollToTop = () => window.scrollTo(0,0);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
