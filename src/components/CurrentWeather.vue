<template>

<div class="container-fluid">
    <div class="card mb-3 mx-auto" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="../photos/icon.png" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{sendWeather.city}}</h5>
                    <p class="card-text"><span>{{sendWeather.main_condition}}</span><span class="pl-3">{{sendWeather.temp}}</span></p>
                    <p class="card-text"><small>{{sendWeather.description}}</small></p>
                  <p class="card-text"><span><img src="https://img.icons8.com/officexs/20/000000/dew-point.png"> {{sendWeather.humidity}}</span><span class="pl-5"><img src="https://img.icons8.com/officexs/20/000000/atmospheric-pressure.png"> {{sendWeather.pressure}}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>


   export default {

     data() {
           return {

           }
       },
     computed: {
       sendWeather () {
         return this.$store.getters.sendWeather
       }
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

</style>
