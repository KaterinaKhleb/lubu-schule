<template  >
    <v-container class="brown lighten-5" fluid grid-list-lg>
        <template >
            <div class="text-h3 text-center my-3">Our activities:</div>
            <v-timeline style="width:80% !important"  
                v-for="item in timelineItems"
                :key="item.name"
                clipped
                  class="mx-auto"
                dense
            >
                <v-timeline-item color="#d28b32" fill-dot small light right>
                    <v-card>
                        <v-card-title class="offer-background">
                            <v-icon dark size="36" class="mr-4"
                                >{{ item.icon }}
                            </v-icon>
                            <h2 class="text-h6 white--text font-weight-light">
                                {{ item.name }}
                            </h2>
                        </v-card-title>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="8">
                                    {{ item.text }}
                                </v-col>
                                <v-col
                                    class="hidden-sm-and-down text-right"
                                    md="4"
                                >
                                <img :src="require(`../assets/${item.image}`)" class="img-small">
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-timeline-item>

            </v-timeline>
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
                    image: "ttennis-2.jpg"
                },
                {
                    name: 'Creative Activities',
                    text:
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
                    icon: 'mdi-draw-pen',
                    image: "ttennis-2.jpg"
                },

                {
                    name: 'Hiking',
                    text:
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
                    icon: 'mdi-hiking',
                    image: "ttennis-2.jpg"
                },
                {
                    name: 'Active Sport',
                    text:
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
                    icon: 'mdi-basketball',
                    image: "img_7543.jpg"
                },
                {
                    name: 'Camping memories ',
                    text:
                        'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.  ',
                    icon: 'mdi-campfire',
                    image: "kaminzimmer.jpg"
                }
            ]
        };
    },
    methods: {
       
    }
};
</script>

<style scoped>

.offer-background {
    background-color: #d28b32;
}

.img-small{
    width: inherit;
    height: auto;
}
</style>
