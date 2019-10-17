<template>

    <div class="container-fluid">
        <!-- As a link -->
        <nav class="navbar fixed-top ">
            <router-link
              tag="a"
              to="/"
              @click.native="deleteStorageCity"
              class="navbar-brand">WeatherApp</router-link>
        </nav>
    </div>

</template>




<script>

  export default {
    methods : {
      deleteStorageCity() {
        localStorage.removeItem("city")
      }
    }
  }




</script>


<style>

    body {
        font-family: monospace;
    }

    nav {
        background-color: darkblue !important;

    }

    .navbar-brand {
        color: whitesmoke;
        font-size: xx-large;
        font-weight: bold;
        font-family: monospace;
    }

</style>
