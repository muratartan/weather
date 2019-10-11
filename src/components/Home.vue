<template>

    <div class="container-fluid">

        <div class="row">

            <div class="col-md-6 mx-auto mainpart">
                <h1 class="display-4">weather is life</h1>
                <br><br>
                <div class="input-group mb-3 col-md-6 mx-auto">
                    <input
                            v-model="location"
                            type="text"
                            class="form-control"
                            placeholder="Search for location..."
                            aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <router-link
                                tag="button"
                                to="/currentWeather"
                                @click.native="setLocation"
                                class="btn btn-secondary"
                                id="button-addon2">Search</router-link>
                    </div>
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
                location : "",
                city: "",
                weather : {
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
        methods : {
            setLocation() {
                let url = "http://api.openweathermap.org/data/2.5/weather?q="+this.location+"&APPID=APIKEY";
                axios.get(url)
                    .then(response => {
                        console.log(response);
                        let data = response.data;
                        let kelvin = 273.15;
                        this.city= data.name;

                        this.weather.temp = data.main.temp-kelvin;
                        this.weather.temp_max = data.main.temp_max-kelvin;
                        this.weather.temp_min = data.main.temp_min-kelvin;
                        this.weather.pressure = data.main.pressure;
                        this.weather.humidity = data.main.humidity;
                        this.weather.main_condition = data.weather[0].main;
                        this.weather.icon = data.weather[0].icon;
                        this.weather.wind_speed = data.wind.speed;
                    });
                this.$store.commit("getLocation", {...this.city ,...this.weather});
            }
        }

    }
</script>

<style scoped>

    .container-fluid {
        background: url(../photos/photo_1.jpg) no-repeat center fixed;
        height: 100vh;
        background-size: cover;
    }

    .mainpart {
        margin-top: 200px;
        text-align: center;
        color: whitesmoke;
    }



</style>
