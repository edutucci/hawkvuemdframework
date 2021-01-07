// import { createApp } from 'vue';
// import App from './App.vue';
// import Prism from 'vue-prismjs';
import VueClickAway from 'vue3-click-away';
import app from './vueApp';
import './registerServiceWorker';
import router from './router';
import store from './store';

// Prism
import './css/prism/prism.css';

// main library styles
import './theme/hawk_default_stylus.styl';
import './appTheme/app.styl';

// custom styles
// import './customStyle.styl'

import './index';

app.use(VueClickAway);

// app.component('Prism', Prism);

// createApp(App).use(store).use(router).mount('#app');
app.use(store).use(router).mount('#app');

// import { createApp } from 'vue';
// import App from './App.vue';
// import './registerServiceWorker';
// import router from './router';
// import store from './store';

// createApp(App).use(store).use(router).mount('#app');
