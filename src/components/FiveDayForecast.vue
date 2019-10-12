<template>


<div>

  <ul class="list-group">
    <li class="list-group-item" v-for="list in lists">{{list.main.temp}}</li>
  </ul>

</div>





    
</template>






<script>

  import axios from "axios";

    export default {
        name: "FiveDayForecast",
        data() {
          return {
            lists : []

          }
        },
        created() {
          axios.get("https://weather-appp.firebaseio.com/forecast.json")
            .then(response => {
              console.log(response);
              console.log("forecast geldi");
              this.lists = response.data.list;
            });
        }
    }
</script>





<style scoped>

</style>
