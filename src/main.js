import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Components from './components';

Vue.use(ElementUI);

Vue.use(Components);

new Vue({
  el: '#app',
  render: h => h(App),
})
