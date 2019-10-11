import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {router} from "./router"


Vue.use(Vuex);

const store = new Vuex.Store({

    state : {
      city : "",
      weather : null
    },

    getters : {
      sendWeather(state) {
        return state.city
      }

    },

    mutations : {

      getLocation(state,data) {
        state.city = data.city;
        state.weather = data.weather;
        console.log(state.weather);
      }

    },

    actions : {

    }


});



export default store
