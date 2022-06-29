<template>
    <v-container
        fluid=""
        grid-list-lg
    >
        <v-container grid-list-lg>
            <v-row
                cols="12"
                sm="6"
                md="8"
            >
                <v-col
                    cols="12"
                    sm="10"
                    class="mx-auto"
                >
                    <v-layout row>
                         <v-flex
                            class="display-2  black--text text-xs-center my-5"
                            >Our activities</v-flex
                        >
                        <v-carousel
                            class="mx-auto"
                            cycle
                            hide-delimiters
                            show-arrows-on-hover
                        >
                            <v-carousel-item
                                v-for="(slide, i) in slides"
                                 :src="slide.url"
                                :key="i"
                            >
                            
                                        <div class="text-h5 img-desc">
                                             {{slide.desc}}
                                        </div>
                                        </v-carousel-item>
                                        </v-carousel>
                    </v-layout>
                    </v-col>
                    </v-row>
        </v-container>
        </v-container>
</template>

<script>
export default {
    name: 'OurActivities',
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                {url:  require('@/assets/trip1.jpg'), desc: "Tripsdrill 19.06.2022"},
                {url:  require('@/assets/trip2.jpg'), desc: "Tripsdrill 19.06.2022"},
                // {url:  require('@/assets/trip3.jpg'), desc: "Tripsdrill 19.06.2022"},
                // {url:  require('@/assets/trip4.jpg'), desc: "Tripsdrill 19.06.2022"},

            ],
        };
    },
};
</script>

<style scoped>
.img-desc{
    background-color: white;
    width: 100%;
    position: absolute;
    bottom: 0;
}
</style>
