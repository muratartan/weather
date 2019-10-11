<template>

<div class="container-fluid">
    <div class="card mb-3 mx-auto" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="../photos/icon.png" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title {{city}}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
               city : ""
           }
       },
     created() {
         return this.city = this.$store.getters.sendWeather
     }


   }



</script>




<style scoped>

    .card {
        margin-top: 250px;
    }

</style>
