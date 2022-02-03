import { createApp } from "vue"
import App from "./App.vue"
import VueChartkick from "vue-chartkick"
import "chartkick/chart.js"

import VueLoading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"

import "@/assets/styles.css"

import router from "@/router"

createApp(App).use(router).use(VueChartkick).use(VueLoading).mount("#app")
