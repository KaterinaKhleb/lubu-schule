<template>
    <v-container
        fluid
        class="camp-desc-holder"
    >
        <v-container grid-list-lg>
            <v-layout column>
                <v-row no-gutters>
                    <v-col
                        cols="12"
                        sm="6"
                        md="8"
                    >
                        <v-card
                            tile
                            flat
                            style="height:100%"
                        >
                            <div class="pt-4 title-camp-desc">
                                <span>
                                    <b>Summer camp </b> - <br> Vacation in Schwarzwald!</span>
                            </div>

                            <v-container class="mt-3">
                                <div class="info-text">The project "Summer Camp" of the association FWBK (International Forum for Science, Education and Culture e.V.) has the motto adventure, learning, play and fun and has set itself the task of actively and playfully teaching English to children and young people of different nationalities, religions, and cultures.
                                </div>
                                <br><br>
                                <div class="info-text">
                                    This is not a classical language course, it is seven days full of exciting activities, an English course in a playful way. English learning paired with creative workshops and the contact and life in nature are promoted by, for example, a forest hike. Sports and adventure are also part of the summer camp - the participating children strengthen their understanding and tolerance for other cultures by making bread on the campfire or playing soccer and table tennis.
                                </div><br><br>
                                <div class="info-text">To book the place, simply contact us on 017654345767 or register using the form below.</div>

                                <v-btn
                                    class="button button-camp-desc mt-5 px-8 py-6"
                                    depressed
                                    tile
                                >Register now </v-btn>

                            </v-container>

                            </v-card>
                            </v-col>
                            <v-col
                                cols="6"
                                md="4"
                            >
                                <v-card
                                    outlined
                                    class="pa-2 info-block"
                                    tile
                                >
                                    <div
                                        v-for="item in descItems"
                                        :key="item.name"
                                        class="d-flex flex-column"
                                    >
                                        <span class=" curse-underline mx-6 mt-5 mb-2">{{item.name}}</span>
                                        <span class="mx-3">
                                            <v-icon
                                                class="mr-2"
                                                color="black"
                                            >{{item.icon}}</v-icon>{{item.text}}</span>
                                        </div>

                                        </v-card>
                                        </v-col>
                </v-row>
            </v-layout>
        </v-container>

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
.camp-desc-holder {
    background-color: #f6f7f8;
}

.footer {
    position: absolute;
    bottom: 24px;
    width: 96%;
}

.title-camp-desc {
    font-size: 3.4rem;
}
.button-camp-desc {
    position: absolute;
    bottom: 2%;
    left: 1%;
}
.info-block {
    border: none !important;
    background-color: white !important;
}
.info-text {
    width: 90%;
}
</style>
