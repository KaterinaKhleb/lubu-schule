<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">
                
            </div>
            <div
                class="display-4 font-weight-black white--text text-xs-center mb-3"
            >
                FOR EVERYONE
            </div>
            <div class="d-flex"><v-icon color="white">mdi-map-marker</v-icon>
            <span  class="white--text">Ludwigsburg</span></div>
            
            <div class="display-1 font-weight-bold white--text text-xs-center">
                We are there for you
            </div>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeScreen',
};
</script>

<style scoped>
.home-hero {
    background: url('../assets/drawers.jpeg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
