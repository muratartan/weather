<template>

    <div class="container-fluid">
        <div class="row">
            <app-header></app-header>
            <router-view></router-view>
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

</style>