import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './pages/_router';
import { createPinia } from 'pinia'
import logger from './logger';

const pinia = createPinia()

const app = createApp(App);

app.config.globalProperties.$logger = logger;

// Global error handler
app.config.errorHandler = (err:any, vm, info) => {
  logger.error(`Error: ${err.toString()}\nInfo: ${info}`);
};


app.use(pinia);
app.use(router);

app.mount('#app');

logger.info('This is an info message');
logger.warn('This is a warning');
logger.error('This is an error');
