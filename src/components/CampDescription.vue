<template>
    <v-container grid-list-lg>
        <v-row no-gutters>
            <v-col
                cols="12"
                sm="6"
                md="8"
            >
                <v-card tile  flat style="height:100%">
                    <div class="pt-4">
                        <span class="text-h2 font-weight-bold ">Summer camp - <br> Vacation in Schwarzwald!</span>
                    </div>

                    <v-container class="mt-3">
                        <span class="text-h5">Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description

                        </span>
                     
                        <v-footer  class="footer d-flex align-end mx-auto" padless>
                        <v-divider></v-divider>
                            <v-col
                                class="text-center"
                                cols="12"
                            >
                                <div>
                                        
                                    <strong>Booking: </strong> +35826352487
                                </div>
                                </v-col>
                        </v-footer>

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
                        <div
                            v-for="item in descItems"
                            :key="item.name"
                            class="d-flex flex-column"
                        >
                            <span class="text-h5 curse-underline mx-6 mt-5 mb-2">{{item.name}}</span>
                            <span class="mx-3">
                                <v-icon
                                    class="mr-2"
                                    color="black"
                                >{{item.icon}}</v-icon>{{item.text}}</span>
                            </div>

                            </v-card>
                            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    name: 'CampDescription',
    data() {
        return {
            descItems: [
                {
                    name: 'WHERE',
                    text: 'Aschenhütte, Bad Herrenalb',
                    icon: 'mdi-map-marker',
                },
                {
                    name: 'WHEN',
                    text: '21-27.8.2022 ',
                    icon: 'mdi-clock-outline',
                },

                {
                    name: 'AGE GROUP',
                    text: '8-13 ',
                    icon: 'mdi-hiking',
                },
                {
                    name: 'WE SPEAK',
                    text: 'English, German, Riussian ',
                    icon: 'mdi-ab-testing',
                },
                {
                    name: 'PRICE',
                    text: '300 Euro  ',
                    icon: 'mdi-cash',
                },
            ],
        };
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
    transform: skew(-12deg) translateY(70%);
    background: rgba(69, 103, 105, 0.5);
    /* z-index: -1; */
}
.curse-underline {
    padding: 30px 0 8px;
    position: relative;
}
.footer{
    position: absolute;
    bottom:24px;
    width: 96%}

</style>
