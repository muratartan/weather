import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import CurrentWeather from "./components/CurrentWeather";



Vue.use(VueRouter);


export const router = new VueRouter({

    routes : [
        { path : "/" , component : Home},
        { path : "/currentWeather" , component : CurrentWeather}

    ],
    mode : "history"

});