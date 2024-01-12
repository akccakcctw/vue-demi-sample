import Vue, { version } from 'vue';
import { VueDemiSample } from '@/components';
import App from './App.vue';

console.warn('Vue version:', version);
Vue.config.productionTip = false;
Vue.use(VueDemiSample);
new Vue({ render: h => h(App) }).$mount('#app');
