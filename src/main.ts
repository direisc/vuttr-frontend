import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueSweetalert2 from './components/VueSweetalert2';

Vue.use(VueSweetalert2, {
  customClass: {
    confirmButton: 'button is-primary',
    cancelButton: 'button is-light',
    // popup: 'animated fast tada'
  },
  buttonsStyling: false,
  reverseButtons: true,
  scrollbarPadding: false,
  // animation: false,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
