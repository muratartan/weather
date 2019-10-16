<template>

<div class="container-fluid mt-5">
  <div class="img">
    <img src="../photos/photo_3.jpg" alt="">
  </div>
  <div style="position: relative">
  <h1 class="card text-center mx-auto">{{city}}/{{country}}</h1>

   <div class="mx-auto mb-4 mt-3" style="width: 540px">
      <button @click="$router.push('/currentWeather')" class="btn btn-outline-light btn-block">click here for current weather</button>
   </div>

  <div class="card mb-5  mx-auto" style="max-width: 540px;" v-for="list in lists">
    <div class="row no-gutters">
      <div class="col-md-4" style="display: flex; align-items: center;justify-content: center">
        <img style="width: 130px" :src="icon='http://openweathermap.org/img/wn/'+list.weather[0].icon+'@2x.png'" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{list.dt_txt}}</h5>
          <p class="card-text w1"><span>{{list.weather[0].main}}</span><span class="pl-3">{{Math.round(list.main.temp-kelvin)}}°C</span></p>
          <p class="card-text w2"><small>{{list.weather[0].description}}</small></p>
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

          let url2 = "http://api.openweathermap.org/data/2.5/forecast?q="+localStorage.getItem("city")+"&APPID=APIKEY";
          axios.get(url2)
            .then(response => {
              console.log(response);
              let forecast = response.data;
              this.lists = forecast.list;
              this.city = forecast.city.name;
              this.country = forecast.city.country;

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

  h5 {
    font-size: 18px;
  }

  .w1 {
    font-size: 25px;
  }

  .w2 {
    font-size: 18px;
  }

  .card {
    background-color: antiquewhite;
    color: darkslategray;
    box-shadow: 2px 2px 7px 3px #a09b9b;
  }


</style>


















