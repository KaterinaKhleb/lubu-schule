<template  >
    <v-container
        class="camp-activ-holder pb-12"
        fluid
        grid-list-lg
    >
        <v-container grid-list-lg>
            <v-layout column>
                <v-row no-gutters>
                    <v-col
                        cols="12"
                        sm="6"
                        md="10"
                    >
                        <template>
                            <div class="title-activity my-3 mx-auto">
                                <span>Our </span>
                                <span class="curse-underline title-activity">activities:</span>
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
export default {
    name: 'CampOffers',
    data() {
        return {
            timelineItems: [
                {
                    name: 'English learning',
                    text:
                        'In our sommer camp we encourage children to start communicating in English with one another, daily language lessons will support them in the learning process. ',
                    icon: 'mdi-book-open-variant',
                    image: 'english.png',
                },
                {
                    name: 'Creative Activities',
                    text:
                        'We prepare various workshops, where we work on fun DIY projects. It is essential to keep creativity developing, and it is a big part of our summer camp! ',
                    icon: 'mdi-draw-pen',
                    image: 'workshops.png',
                },

                {
                    name: 'Hiking',
                    text:
                        'The best opportunity to explore the Mother Nature, learn about Flora and Fauna of the Black Forest.',
                    icon: 'mdi-hiking',
                    image: 'hike.png',
                },
                {
                    name: 'Active Sport',
                    text:
                        'Tennis, Football, Volleyball and many other types of sport is planned to promote the team spirit, stay active and just have fun! ',
                    icon: 'mdi-basketball',
                    image: 'football.jpg',
                },
                {
                    name: 'Camping memories ',
                    text:
                        'Smell of fire, guitar songs, fresh air and sound of crickets - those are the warmest childhood memories that we will create together! ',
                    icon: 'mdi-campfire',
                    image: 'chill.jpg',
                },
            ],
        };
    },
    methods: {},
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
