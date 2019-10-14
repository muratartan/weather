<template>




<div class="container-fluid">
    <div class="search" v-if="weather.length<=0"><img src="https://img.icons8.com/color/96/000000/search.png"></div>
  <div v-else>
    <div class="card mb-3 mx-auto" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4" style="display: flex; align-items: center;justify-content: center; background-color: floralwhite">
                <img style="width: 130px" :src="icon='http://openweathermap.org/img/wn/'+weather.icon+'@2x.png'" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h2 class="card-title">{{weather.city}}</h2>
                    <p class="card-text"><span style="font-size: 18px">{{weather.main_condition}}</span><span style="padding-left: 130px;top: 40px; font-size: 60px;position: absolute">{{weather.temp}}°C</span></p>
                    <p class="card-text" style="font-size: 15px"><small>{{weather.description}}</small></p>
                  <p class="card-text"><span><img src="https://img.icons8.com/officexs/20/000000/dew-point.png"> {{weather.humidity}}%</span><span class="pl-5"><img src="https://img.icons8.com/officexs/20/000000/atmospheric-pressure.png"> {{weather.pressure}}mPa</span></p>
                </div>
            </div>
          <hr>
        </div>
    </div>
    <div class="col-md-12">
      <router-link
        tag="p"
        to="/fiveday">
        <p>Click here for five days forecast</p>
      </router-link>
    </div>
  </div>

</div>


</template>

<script>

  import axios from "axios";

   export default {

     data() {
           return {

             weather : "",

           }
       },

     methods : {

     },

     created() {
       setTimeout(()=> {
         axios.get("https://weather-appp.firebaseio.com/weather.json")
           .then(response => {
             console.log(response);
             this.weather =response.data;


           })
       },6000);
     }





   }



</script>




<style scoped>

    .card {
        margin-top: 250px;
    }

  .col-md-8 {
    background-color: floralwhite;
  }

  .container-fluid {
    background: url(../photos/photo_3.jpg) no-repeat center fixed;
    height: 100vh;
    background-size: cover;
  }

  .search {
    margin-top: 250px;
    display: flex;
    justify-content: center;
  }
  .col-md-12{
    display: flex;
    justify-content: center;
    height: 35px;
    cursor: pointer;
  }
  .col-md-12 p{
    margin: auto;
  }




</style>
