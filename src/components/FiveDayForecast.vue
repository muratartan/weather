<template>

<div class="container-fluid mt-5">

  <h1 class="pt-5 text-center">{{city}}, {{country}}</h1>

  <div class="card mb-2 mt-5 mx-auto" style="max-width: 540px;" v-for="list in lists">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="icon='http://openweathermap.org/img/wn/'+list.weather[0].icon+'@2x.png'" class="card-img" alt="...">
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
          axios.get("https://...")
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

</style>


















