// Import modules...
import { createApp, h } from "vue";
// import "@vite/dynamic-import-polyfill"

import "../css/app.css";
import "./bootstrap.js";

import App from "./Home.vue";
// import VueAxios from "vue-axios";
// import { createWebHistory, createRouter } from "vue-router";
// import axios from "axios";
// import { routes } from "./routes";
// import { store } from "./store";

const el = document.getElementById("app");

// const router = createRouter({
//     routes: routes,
//     history: createWebHistory(),
// });

createApp({
	render: () => h(App),
})
	// .use(router)
	// .use(store)
	// .use(VueAxios, axios)
	.mount(el);
