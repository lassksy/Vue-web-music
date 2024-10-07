import "./assets/style/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Icon } from '@iconify/vue';
import App from "./App.vue";
import router from "./router";
import 'element-plus/theme-chalk/src/message.scss'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('Icon', Icon);

app.mount("#app");
