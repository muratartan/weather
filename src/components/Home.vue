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
                            @keyup.enter="$router.push('/currentWeather')"
                            @keydown.enter="setLocation"
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
            }
        },
        methods : {
            setLocation() {
              localStorage.setItem("city" , this.location)
            },
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
