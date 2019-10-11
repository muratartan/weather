import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {router} from "./router"


Vue.use(Vuex);

const store = new Vuex.Store({

    state : {
      weather : null
    },

    getters : {
      sendWeather(state) {
        return state.weather
      }

    },

    mutations : {

      getLocation(state,data) {
        state.weather = data;
        console.log(state.weather);
      }

    },

    actions : {

    }


});



export default store
