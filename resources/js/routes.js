import Home from "./Pages/Home.vue";
import About from "./Pages/About.vue";
import Dashboard from "./Pages/Profile/Dashboard.vue";

export const routes = [
	{
		name: "home",
		path: "/",
		component: Home,
	},
	{
		name: "about",
		path: "/about",
		component: About,
	},
	{
		name: "dashboard",
		path: "/dashboard",
		component: Dashboard,
	},
];
