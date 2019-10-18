<template>

    <div class="container-fluid">

        <div class="row">
            <div class="col-sm-6 mx-auto">
                <div class="card">
                    <h5 class="card-header">Featured</h5>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button @click="goHome" class="btn btn-primary">Go home</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "error",
        methods : {
            goHome () {
                localStorage.removeItem("city");
                this.$router.push("/");
            }
        },
    }
</script>

<style scoped>

</style>
