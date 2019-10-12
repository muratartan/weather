<template>




<div class="container-fluid">
    <div class="search" v-if="weather.length<=0"><img src="https://img.icons8.com/color/96/000000/search.png"></div>
    <div v-else class="card mb-3 mx-auto" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="../photos/icon.png" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{weather.city}}</h5>
                    <p class="card-text"><span>{{weather.main_condition}}</span><span class="pl-3">{{weather.temp}}</span></p>
                    <p class="card-text"><small>{{weather.description}}</small></p>
                  <p class="card-text"><span><img src="https://img.icons8.com/officexs/20/000000/dew-point.png"> {{weather.humidity}}</span><span class="pl-5"><img src="https://img.icons8.com/officexs/20/000000/atmospheric-pressure.png"> {{weather.pressure}}</span></p>
                </div>

            </div>
          <hr>
          <div class="col-md-12">
            <p>beş günlük için tıkla</p>
          </div>
        </div>
    </div>
</div>


</template>

<script>

  import axios from "axios";

   export default {

     data() {
           return {

             weather : ""
           }
       },

     created() {
       setTimeout(()=> {
         axios.get("https://...")
           .then(response => {
             console.log(response);
             this.weather =response.data;

           })
       },2500);
     }





   }



</script>




<style scoped>

    .card {
        margin-top: 250px;
    }

  .col-md-8 {
    background-color: whitesmoke;
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
  }
  .col-md-12 p{
    margin: auto;
  }
</style>
