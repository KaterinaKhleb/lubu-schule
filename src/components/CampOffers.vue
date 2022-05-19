<template  >
    <v-container
        class="camp-activ-holder pb-12"
        fluid
        grid-list-lg
    >
        <v-container v-if="ourActivities" grid-list-lg>
            <v-layout column>
                <v-row no-gutters>
                    <v-col
                        cols="12"
                        sm="6"
                        md="10"
                    >
                        <template>
                            <div class="title-activity my-3 mx-auto">
                                <span class="curse-underline title-activity">{{ourActivities}}:</span>
                            </div>
                            <div class="flexbox mx-auto">
                                <v-card
                                    v-for="item in timelineItems"
                                    :key="item.name"
                                    class="card-item"
                                >
                                    <img
                                        class="activ-img"
                                        :src="require(`../assets/${item.image}`)"
                                        alt=""
                                    >
                                        <v-card-title>
                                            {{item.name}}
                                        </v-card-title>

                                        <v-card-subtitle>
                                            {{item.text}}
                                        </v-card-subtitle>
                                        </v-card>
                                        <img
                                            class="sitting-illustration"
                                            :src="require(`../assets/sitting_illustration.png`)"
                                            alt=""
                                        >

                            </div>
                        </template>
                        </v-col>
                </v-row>
            </v-layout>
        </v-container>
        </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'CampOffers',
    methods: {},
    computed: {
        ...mapGetters(["ourActivities", "activity1Name", "activity1Desc",  "activity2Name", "activity2Desc", "activity3Name", "activity3Desc", "activity4Name", "activity4Desc", "activity5Name", "activity5Desc"]),

        timelineItems(){
            return  [
                {
                    name: this.activity1Name,
                    text:this.activity1Desc,
                    icon: 'mdi-book-open-variant',
                    image: 'english.png',
                },
                {
                    name: this.activity2Name,
                    text:this.activity2Desc,
                    icon: 'mdi-draw-pen',
                    image: 'workshops.png',
                },

                {
                    name: this.activity3Name,
                    text:this.activity3Desc,
                    icon: 'mdi-hiking',
                    image: 'hike.png',
                },
                {
                    name: this.activity4Name,
                    text: this.activity4Desc,
                    icon: 'mdi-basketball',
                    image: 'football.jpg',
                },
                {
                    name: this.activity5Name,
                    text:this.activity5Desc,
                    icon: 'mdi-campfire',
                    image: 'chill.jpg',
                },
            ]
        }
    },
};
</script>

<style scoped>
.camp-activ-holder {
    background-color: #f6f7f8;
}

.offer-background {
    background-color: #d28b32;
}

.img-small {
    width: inherit;
    height: auto;
}

.title-activity {
    font-size: 3rem;
    font-weight: 700;
    margin: auto;
}

.curse-underline::before {
    transform: skew(-12deg) translateY(-30%);
    width: 200px;
}
.flexbox {
    display: flex !important;
    flex-wrap: wrap !important;
}
.card-item {
    list-style: none;
    margin-left: 2%;
    margin-top: 2%;
    flex: 0 0 30% !important;
}
.activ-img {
    width: 100%;
}
.sitting-illustration {
    width: 350px;
    height: auto;
    position: absolute;
    right: 0;
    top: 56%;
}
</style>
