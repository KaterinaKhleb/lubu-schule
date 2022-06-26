<template>
    <v-container
        fluid
        id="curseSection"
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
                    sm="12"
                >
                    <v-layout row>
                        <v-flex class="display-2  black--text text-xs-center my-5">
                            <span> {{ coursesName }}</span>
                        </v-flex>
                    </v-layout>
                    <v-layout
                        row
                        wrap
                    >
                        <v-expansion-panels popup>
                            <v-expansion-panel>
                                <v-expansion-panel-header light>
                                    {{ english }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="d-flex mt-5">
                                        <div
                                            class="width-50"
                                            color="red"
                                        >
                                            <span class="text-h5 curse-underline ">{{ desc }}:</span>
                                            <br />
                                            <div class=" pt-6">
                                                {{ engDesc }}
                                            </div>
                                    </div>
                                    <div class="width-50 ml-12">
                                        <span class="text-h5 curse-underline">{{ groups }}</span>
                                        <br />
                                        <div class="pt-6">
                                            <div>
                                                <h4>
                                                    {{ youngGroup }}: {{ saturday }} 11:00 - 11:45
                                                </h4>
                                                <h4>
                                                    {{ middleGroup }}: {{ saturday }} 10: 00 - 10:45
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header light>
                                    {{ german }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="d-flex mt-5">
                                        <div
                                            class="width-50"
                                            color="red"
                                        >
                                            <span class="text-h5 curse-underline ">{{ desc }}:</span>
                                            <br />
                                            <div class=" pt-6">
                                                {{ deutschDesc }}
                                            </div>
                                    </div>
                                    <div class="width-50 ml-12">
                                        <span class="text-h5 curse-underline">{{ groups }}</span>
                                        <br />
                                        <div class="pt-6">
                                            <div>
                                                <h4>
                                                    {{ youngGroup }}: {{ saturday }} 10:00 - 10:45
                                                </h4>
                                                <h4>
                                                    {{ middleGroup }}: {{ saturday }} 11:00 - 11:45
                                                </h4>
                                                <h4>
                                                    {{ parents }}: {{ saturday }} 10:00 - 11:45
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header light>
                                    {{ additionalCourses }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="d-flex mt-5">
                                        <div
                                            class="width-50"
                                            color="red"
                                        >
                                            <span class="text-h5 curse-underline ">{{ desc }}:</span>
                                            <br />
                                            <div class=" pt-6">
                                                {{ extraCoursesDesc }}
                                            </div>
                                    </div>
                                    <div class="width-50 ml-12">
                                        <span class="text-h5 curse-underline">{{ groups }}</span>
                                        <br />
                                        <div class="pt-6">
                                            <div>
                                                <h4>
                                                    {{ forAll }}: {{ saturday }} 12:00 - 13:30
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        </v-layout>
                        </v-col>
                        </v-row>
        </v-container>
        <!-- <img class="dots-curses" :src="require(`../assets/dots_dark.svg`)" alt=""> -->
        </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CursesPlan',
    computed: {
        ...mapGetters([
            'coursesName',
            'english',
            'german',
            'additionalCourses',
            'desc',
            'groups',
            'engDesc',
            'youngGroup',
            'middleGroup',
            'parents',
            'saturday',
            'deutschDesc',
            'extraCoursesDesc',
            'forAll',
        ]),
    },

    methods: {
        scrollMeTo(refName) {
            const element = document.getElementById(refName);
            const top = element.offsetTop;
            window.scrollTo(0, top);
        },
    },
};
</script>

<style scoped>
#curseSection {
    background-color: #f6f7f8;
}
.width-50 {
    width: 48%;
}

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
.dots-curses {
    position: relative;
    left: 80px;
    bottom: 80px;
    height: 120px;
    width: auto;
}
</style>
