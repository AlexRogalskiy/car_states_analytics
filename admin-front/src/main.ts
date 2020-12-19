import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { TestApi, AccountApi, CarApi, ParameterApi, RouteApi } from './client/admin';
import axios from 'axios'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')


const BASE_PATH = "http://localhost:9090"

export const AXIOS = axios.create({baseURL: BASE_PATH})
AXIOS.interceptors.request.use(function (config) {
    config.headers.Authorization = store.state.AccountStore.token;
    return config;
});

export const testApi = new TestApi({}, BASE_PATH, AXIOS)
export const accountApi = new AccountApi({}, BASE_PATH, AXIOS)
export const carApi = new CarApi({}, BASE_PATH, AXIOS)
export const parameterApi = new ParameterApi({}, BASE_PATH, AXIOS)
export const routeApi = new RouteApi({}, BASE_PATH, AXIOS)
