<template>
    <v-container fluid class="camp-desc-holder">
        <v-container grid-list-lg>
            <v-layout column>
                <v-row no-gutters>
                    <v-col cols="12" md="8" sm="6">
                        <v-card tile flat style="height:100%">
                            <div class="pt-4 title-camp-desc">
                                <span>
                                    <b>{{ campName }} </b> - <br />
                                    {{ campSubname }}</span
                                >
                            </div>

                            <v-container class="mt-3">
                                <div class="info-text">
                                    {{ camDescPartOne }}
                                </div>
                                <br /><br />
                                <div class="info-text mb-3">
                                    {{ campDescription }}
                                </div>
                                <br /><br />
                                <!-- <div class="info-text">To book the place, simply contact us on 017654345767 or register using the form below.</div> -->

                                <v-btn
                                    class="button button-camp-desc mt-7 px-8 py-6"
                                    depressed
                                    tile
                                    @click="scrollMeTo('registerForm')"
                                    >{{ registerNow }}</v-btn
                                >
                            </v-container>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <v-card outlined class="pa-2 info-block" tile>
                            <div
                                v-for="(item, index) in descItems"
                                :key="index"
                                class="d-flex flex-column"
                            >
                                <span class=" curse-underline mx-6 mt-5 mb-2">{{
                                    item.name
                                }}</span>
                                <span class="mx-3">
                                    <v-icon class="mr-2" color="black">{{
                                        item.icon
                                    }}</v-icon
                                    >{{ item.text }}</span
                                >
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CampDescription',

    computed: {
        ...mapGetters([
            'where',
            'when',
            'ageGroup',
            'weSpeak',
            'price',
            'registerNow',
            'places',
            'camDescPartOne',
            'campDescription',
            'campName',
            'campSubname',
            'langs'
        ]),
        descItems() {
            return [
                {
                    name: this.where,
                    text: 'Aschenhütte, Bad Herrenalb',
                    icon: 'mdi-map-marker'
                },
                {
                    name: this.when,
                    text: '21-27.8.2022 ',
                    icon: 'mdi-clock-outline'
                },

                {
                    name: this.ageGroup,
                    text: '8-13 ',
                    icon: 'mdi-hiking'
                },
                {
                    name: this.weSpeak,
                    text: this.langs,
                    icon: 'mdi-ab-testing'
                },
                {
                    name: this.price,
                    text: '300 Euro  ',
                    icon: 'mdi-cash'
                }
            ];
        }
    },
    methods: {
        scrollMeTo(refName) {
            const element = document.getElementById(refName);
            const top = element.offsetTop;
            window.scrollTo(0, top);
        }
    }
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

/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px) {
}

/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {
    .title-camp-desc {
        font-size: 2.8rem;
    }
}

/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {
    .title-camp-desc {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .title-camp-desc {
        font-size: 1.5rem;
    }
}
</style>
