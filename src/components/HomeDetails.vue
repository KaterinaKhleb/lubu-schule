<template>
    <v-container fluid class="school-holder">
        <v-container grid-list-lg>
            <v-row cols="12" sm="6" md="8">
                <v-col cols="12" sm="8">
                    <v-layout column>
                        <v-flex
                            class="display-2  black--text text-xs-center my-5"
                            >{{schoolAboutUs}}</v-flex
                        >
                        <v-flex>
                            <div
                                class="headline mt-3 black--text font-weight-bold"
                            >
                                {{schoolMotiv}}:
                            </div>
                            <p class="subheading mt-3">
                                {{schoolMotivText}}
                        
                            </p>
                        </v-flex>
                        <v-flex>
                            <div
                                class="headline mt-3 black--text font-weight-bold"
                            >
                                {{schoolOffers}}:
                            </div>
                            <p class="subheading mt-3">
                                {{schoolOffersText}}
                               
                            </p>
                        </v-flex>
                    </v-layout>
                </v-col>
                <v-col cols="12" sm="4">
                    <img
                        :src="require(`../assets/Illustration_girl.svg`)"
                        alt=""
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HomeDetails',
    computed: {
        ...mapGetters([
            "schoolAboutUs",
        "schoolMotiv",
        "schoolMotivText",
        "schoolOffers",
        "schoolOffersText"
        ])
    },
};

</script>

<style scoped>
.school-holder {
    background-color: #f6f7f8;
}
</style>
