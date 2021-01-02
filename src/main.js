// import { createApp } from 'vue';
// import App from './App.vue';
import VueClickAway from 'vue3-click-away';
import app from './vueApp';
import './registerServiceWorker';
import router from './router';
import store from './store';

// main library styles
import './theme/hawk_default_stylus.styl';
import './appTheme/app.styl';

// custom styles
// import './customStyle.styl'

import './index';

app.use(VueClickAway);

// createApp(App).use(store).use(router).mount('#app');
app.use(store).use(router).mount('#app');

// import { createApp } from 'vue';
// import App from './App.vue';
// import './registerServiceWorker';
// import router from './router';
// import store from './store';

// createApp(App).use(store).use(router).mount('#app');
