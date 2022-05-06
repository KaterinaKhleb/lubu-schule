<template  >
    <v-container
        class="camp-activ-holder"
        fluid
        grid-list-lg
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
                            <img class="activ-img" :src="require(`../assets/${item.image}`)"  alt="">
                            <v-card-title>
                                {{item.name}}
                            </v-card-title>

                            <v-card-subtitle>
                                {{item.text}}
                            </v-card-subtitle>
                            </v-card>
            <img class="sitting-illustration" :src="require(`../assets/sitting_illustration.png`)" alt="">

            </div>
        </template>
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
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
                    icon: 'mdi-book-open-variant',
                    image: 'english.png',
                },
                {
                    name: 'Creative Activities',
                    text:
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
                    icon: 'mdi-draw-pen',
                    image: 'workshops.png',
                },

                {
                    name: 'Hiking',
                    text:
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
                    icon: 'mdi-hiking',
                    image: 'hike.png',
                },
                {
                    name: 'Active Sport',
                    text:
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
                    icon: 'mdi-basketball',
                    image: 'football.jpg',
                },
                {
                    name: 'Camping memories ',
                    text:
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
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
    width: 80%;
    margin: auto;
}

.curse-underline::before {
    transform: skew(-12deg) translateY(-30%);
    width: 200px;
}
.flexbox {
    display: flex !important;
    flex-wrap: wrap !important;
    width: 80%;


}
.card-item {
    list-style: none;
    margin-left:2%;
    margin-top: 2%;
     flex:0 0 30% !important
}
.activ-img{
    width: 100%;
}
.sitting-illustration{
    width: 350px;
    height: auto;;
position: absolute;
right: 0;
top:56%
}
</style>
