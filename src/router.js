import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import CurrentWeather from "./components/CurrentWeather";
import FiveDayForecast from "./components/FiveDayForecast"



Vue.use(VueRouter);


export const router = new VueRouter({

    routes : [
        { path : "/" , component : Home},
        { path : "/currentWeather" , component : CurrentWeather},
        { path : "/fiveday", component : FiveDayForecast}

    ],
    mode : "history"

});
