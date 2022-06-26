<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <!-- <div class="display-4 font-weight-black white--text text-xs-center">
                Школа КИТ
            </div>
            <div
                class="display-4 font-weight-black white--text text-xs-center mb-3"
            >
             
            </div>
            <div class="d-flex">
                <v-icon color="white">mdi-map-marker</v-icon>
                <span class="white--text">Stuttgart</span>
            </div>

            <div class="display-1 font-weight-bold white--text text-xs-center">
                Добро пожаловать!
            </div> -->
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeScreen'
};
</script>

<style scoped>
.home-hero {
    background: url('../assets/kit-logo.png');
      background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
    width: auto;
    height: 100vh;
}
</style>
