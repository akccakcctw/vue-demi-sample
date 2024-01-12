import { createApp, version } from 'vue';
import { VueDemiSample } from '@/components';
import App from './App.vue';

console.warn('Vue version:', version);
const app = createApp(App);
app.use(VueDemiSample);
app.mount('#app');
