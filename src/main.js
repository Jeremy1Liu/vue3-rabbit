import { useIntersectionObserver } from "@vueuse/core"; // Import the 'useIntersectionObserver' function from the '@vueuse/core' module

import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { lazyPlugin } from "./directives";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

//main.js
//定义全局指令
app.use(lazyPlugin); // Use the 'lazyPlugin' plugin to define a global directive named 'img-lazy'
