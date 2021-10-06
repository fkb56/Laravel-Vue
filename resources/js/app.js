import { createApp, h } from "vue";
import App from "./Pages/App.vue";
import { createWebHistory, createRouter } from "vue-router";
// import VueAxios from "vue-axios";
// import axios from "axios";
import { routes } from "./routes";
import store from "./Store/app.js";
import "../css/app.css";
import "./bootstrap.js";

const el = document.getElementById("app");

const router = createRouter({
	routes: routes,
	history: createWebHistory(),
});

createApp({
	render: () => h(App),
})
	.use(router)
	.use(store)
	// .use(VueAxios, axios)
	.mount(el);
