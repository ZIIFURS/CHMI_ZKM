import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/pages/Auth.vue";
import General from "@/pages/General.vue";
import Dash from "@/pages/Dash.vue";
import Servers from "@/pages/Servers.vue";
import Rep from "@/pages/Rep.vue";
import admPanel from "@/pages/AdmPanel.vue";
import createRep from "@/pages/CreateRep.vue";
import price from "@/pages/Price.vue";
import Forecast from "@/pages/Forecast.vue";
import Notify from "@/pages/Notify.vue";

const routes = [
    { path: '/auth', component: Auth },
    { path: '/general', component: General },
    { path: '/dash', component: Dash },
    { path: '/serv', component: Servers },
    { path: '/rep', component: Rep },
    { path: '/adm', component: admPanel },
    { path: '/cr_rep', component: createRep },
    { path: '/price', component: price },
    { path: '/forecast', component: Forecast },
    { path: '/notify', component: Notify },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

