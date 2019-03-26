import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router/router.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCode, faPhone, faAddressCard, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "./css/global.css";
import Chart from './helpers/chart/v-chart-plugin.js';

library.add(faSearch, faCode, faPhone, faAddressCard, faChevronRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Chart);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
