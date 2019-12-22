// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/bootstrap-reboot.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/main.css'
import './assets/css/fonts.min.css'
import './assets/fonts/fontawesome-all.js'
import VMdDateRangePicker from "v-md-date-range-picker"
import "vue-gifplayer/src/gif.css"
import VueCharts from 'vue-chartjs'
import VueCircle from 'vue2-circle-progress'
import FullCalendar from 'vue-full-calendar'
import VueMoment from 'vue-moment'
import Swiper from 'vue-swiper'
import Selectize from 'vue2-selectize'
import VueMaterial from 'vue-material'
import VueWaypoint from 'vue-waypoint'
import RangeSlider from 'vue-range-slider'
import { Mediaelement } from 'vue-mediaelement';
import JQuery from 'jquery'
import VueLoaders from 'vue-loaders'
import PerfectScrollbar from 'vue2-perfect-scrollbar'




 import './assets/js/svgxuse.js'
 import './assets/js/Headroom.js'
import './assets/js/velocity.js'
import './assets/js/popper.min.js'
import './assets/js/smooth-scroll.js'
// import './assets/js/main2.js'
import './assets/js/Chart.js'
import './assets/js/chartjs-plugin-deferred.js'


//http://localhost:8080/
Vue.use(VueLoaders);
Vue.use(FullCalendar),
Vue.use(VMdDateRangePicker);
Vue.use(VueMoment),
Vue.component('mediaelement', Mediaelement);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
