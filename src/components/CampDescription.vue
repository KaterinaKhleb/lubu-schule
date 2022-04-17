<template>
    <v-container grid-list-lg>
        <v-row no-gutters>
            <v-col
                cols="12"
                sm="6"
                md="8"
            >
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    <div class="mt-4">
                        <span class="text-h2 font-weight-bold ">Sommercamp - <br> Vacation in Schwarzwald!</span>
                    </div>

                    <v-container class="mt-3">
                        <span class="text-h5">Description Description Description Description Description
                             Description Description Description Description Description Description
                              Description Description Description Description Description Description Description
                               Description Description Description Description Description Description
                                Description Description Description Description Description Description
                                 Description Description Description Description Description

                        </span>
                    </v-container>

                    </v-card>
                    </v-col>
                    <v-col
                        cols="6"
                        md="4"
                    >
                        <v-card
                            class="pa-2"
                            outlined
                            tile
                        >
                            <div class="d-flex flex-column">
                                <span class="text-h5 curse-underline ma-6">WHERE</span>
                                <span class="mx-3">
                                    <v-icon
                                        class="mr-2"
                                        color="black"
                                    >mdi-map-marker</v-icon>Aschenhütte, Bad Herrenalb</span>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="text-h5 curse-underline ma-6 ">WHEN</span>
                                <span class="mx-3">
                                    <v-icon
                                        class="mr-2"
                                        color="black"
                                    >mdi-clock-outline</v-icon>21-27.8.2022</span>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="text-h5 curse-underline ma-6 "> AGE</span>
                                <span class="mx-3">
                                    <v-icon
                                        class="mr-2"
                                        color="black"
                                    >mdi-human-greeting-variant</v-icon>8-13 y.o.</span>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="text-h5 curse-underline ma-6">LANGUAGE</span>
                                <span class="mx-3">
                                    <v-icon
                                        class="mr-2"
                                        color="black"
                                    >mdi-ab-testing</v-icon>English, Russian, Ukranian, German</span>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="text-h5 curse-underline ma-6">PRICE</span>
                                <span class="mx-3">
                                    <v-icon
                                        class="mr-2"
                                        color="black"
                                    >mdi-cash</v-icon>300 Euro</span>
                            </div>
                            </v-card>
                            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    name: 'CampDescription',
    methods: {
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        },
    },
};
</script>

<style scoped>
.curse-underline::before {
    content: '';
    position: absolute;
    bottom: 16px;
    width: 150px;
    height: 14px;
    transform: skew(-12deg) translateY(90%);
    background: rgba(238, 111, 87, 0.5);
    /* z-index: -1; */
}
.curse-underline {
    padding: 30px 0 8px;
    position: relative;
}
</style>
