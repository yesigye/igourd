import './assets/main.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import English from "./languages/english";
import Chinese from "./languages/chinese";

const i18n = createI18n({
    locale: localStorage.getItem('igourd_lang') || 'en',
    fallbackLocale: 'en',
    messages: {
        en: English,
        cn: Chinese,
    }
});

const pinia = createPinia()
const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(pinia)
app.mount('#app');
