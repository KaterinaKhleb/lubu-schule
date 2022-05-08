<template>
    <v-container fluid fill-height class="camp-home" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="title-camp-home white--text text-xs-center">
                SOMMERCAMP
            </div>
            <div class="d-flex"><v-icon color="white">mdi-map-marker</v-icon>
            <span  class="white--text">Aschenhütte, Bad Herrenalb   </span></div>
            
            <div class=" subtitle-camp font-weight-bold white--text text-xs-center">
                Advanture, Learning, fun and games! 
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
    background: url('../assets/camp.png') center no-repeat;
    background-size: cover;
    height: 100vh;

}
.title-camp-home{
    font-weight: 900;
    font-size: 5rem
}
.subtitle-camp{
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 48px;
}
</style>
