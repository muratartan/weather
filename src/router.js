import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import CurrentWeather from "./components/CurrentWeather";
import FiveDayForecast from "./components/FiveDayForecast";
import error from "./components/error"



Vue.use(VueRouter);


export const router = new VueRouter({

    routes : [
        { path : "/" ,
                 component : Home,

        },
        { path :
            "/currentWeather" ,
            component : CurrentWeather,
                 beforeEnter(to,from,next) {
                     if(localStorage.key(1)) {
                         next()
                     } else {
                         next("/")
                     }
                 }

        },
        { path :
            "/fiveday",
            component : FiveDayForecast,
                 beforeEnter(to,from,next) {
                     if(localStorage.key(1)) {
                         next()
                     } else {
                         next("/")
                     }
                 }

        },
        {
            path : "/error",
            component : error,
                beforeEnter(to,from,next) {
                    if(localStorage.key(1)) {
                        next()
                    } else {
                        next("/")
                    }
                }
        }

    ],
    mode : "history"

});
