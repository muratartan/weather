<template>

    <div class="container-fluid">
        <div class="row">
            <app-header></app-header>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>

    </div>

</template>




<script>

    import Header from "./components/Header";


    export default {

        components : {
            appHeader : Header,

        },


    }

</script>


<style>

  body {
    background-color: aliceblue;
  }

  .fade-enter {opacity: 0}
  .fade-enter-active {transition: opacity .5s}
  .fade-leave {}
  .fade-leave-active {transition: opacity .5s; opacity: 0}

</style>
