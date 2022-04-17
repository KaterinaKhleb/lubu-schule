<template>
    <v-container fluid fill-height class="camp-home" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">
                SOMMERCAMP
            </div>
            <div class="d-flex"><v-icon color="white">mdi-map-marker</v-icon>
            <span  class="white--text">Aschenhütte, Bad Herrenalb   </span></div>
            
            <div class="display-1 font-weight-bold white--text text-xs-center">
                Abenteuer, Lernen, Spiel und Spaß! 
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
.camp-home {
    background: url('../assets/aschenhuette.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
}
</style>
