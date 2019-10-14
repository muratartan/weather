<template>

<div class="container-fluid mt-5">
  <div class="img">
    <img src="../photos/photo_3.jpg" alt="">
  </div>
  <div style="position: relative">
  <h1 class="card text-center mx-auto">{{city}}, {{country}}</h1>

  <div class="card mb-2 mt-5 mx-auto" style="max-width: 540px;" v-for="list in lists">
    <div class="row no-gutters">
      <div class="col-md-4" style="display: flex; align-items: center;justify-content: center">
        <img style="width: 130px" :src="icon='http://openweathermap.org/img/wn/'+list.weather[0].icon+'@2x.png'" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{list.dt_txt}}</h5>
          <p class="card-text"><span>{{list.weather[0].main}}</span><span class="pl-3">{{Math.round(list.main.temp-kelvin)}}</span></p>
          <p class="card-text"><small>{{list.weather[0].description}}</small></p>
          <p class="card-text"><span><img src="https://img.icons8.com/officexs/20/000000/dew-point.png"> {{list.main.humidity}}</span><span class="pl-5"><img src="https://img.icons8.com/officexs/20/000000/atmospheric-pressure.png"> {{list.main.pressure}}</span></p>
        </div>
      </div>
    </div>
  </div>
  </div>

</div>




    
</template>






<script>

  import axios from "axios";

    export default {
        name: "FiveDayForecast",
        data() {
          return {
            lists : [],
            kelvin : 273.15,
            city : "",
            country : "",
            icon2 : ""

          }
        },
        created() {
          axios.get("https://weather-appp.firebaseio.com/forecast.json")
            .then(response => {
              console.log(response);
              console.log("forecast geldi");
              this.lists = response.data.list;
              this.city = response.data.city.name;
              this.country = response.data.city.country;
            });
        }
    }
</script>





<style scoped>

  .img img{
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  h1 {
    width: 540px;
    background-color: floralwhite;
    margin-top: 50px;
    color: firebrick;

  }

  .card {
    background-color: floralwhite;
    color: darkslategray;
    box-shadow: 2px 2px 7px 3px #a09b9b;
  }


</style>


















