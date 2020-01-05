<template>

  <div class="container-fluid">

      <div class="search" v-if="weather.city.length<=0"><img src="https://img.icons8.com/color/96/000000/search.png"></div>
      <div v-else>
        <div class="card mb-3 mx-auto" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4" style="display: flex; align-items: center;justify-content: center;background-color: #dcfffc;">
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
        <div class="mx-auto mb-4 mt-3" style="width: 540px">
          <button @click="$router.push('/fiveday')" class="btn btn-outline-light btn-block">click here for 5 day / 3 hour forecast</button>
        </div>
      </div>
  </div>


</template>

<script>

  import axios from "axios";

   export default {

     data() {
           return {

             weather : {
               city : "",
               temp : "",
               temp_max : "",
               temp_min : "",
               pressure : "",
               humidity : "",
               main_condition : "",
               wind_speed : "",
               icon : ""
             },
           }
       },


     created() {

       let url1 = "http://api.openweathermap.org/data/2.5/weather?q="+localStorage.getItem("city")+"&APPID=39eab19b26cc141b0f4f643549c56dd7";
       axios.get(url1)
         .then(response => {
           console.log(response);

           let data = response.data;
           let kelvin = 273.15;
           this.weather.city= data.name;
           this.weather.temp = Math.round(data.main.temp-kelvin);
           this.weather.temp_max = data.main.temp_max-kelvin;
           this.weather.temp_min = data.main.temp_min-kelvin;
           this.weather.pressure = data.main.pressure;
           this.weather.humidity = data.main.humidity;
           this.weather.main_condition = data.weather[0].main;
           this.weather.icon = data.weather[0].icon;
           this.weather.description = data.weather[0].description;
           this.weather.wind_speed = data.wind.speed;

         }).catch(()=>{
             this.$router.push("/error");
       });
     }





   }



</script>




<style scoped>

    .card {
        margin-top: 250px;
        color: #000069;
    }

  .col-md-8 {
    background-color: #dcfffc;
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


  button {
    color: blue;

  }




</style>
