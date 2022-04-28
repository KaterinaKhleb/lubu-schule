<template>
    <v-container id="curseSection" grid-list-lg>
        <v-layout row>
            <v-flex class="display-2  black--text text-xs-center my-5"
                >Available free courses</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-expansion-panels popup>
                <v-expansion-panel v-for="(item, i) in 5" :key="i">
                    <v-expansion-panel-header light >
                        Curse blabla
                    </v-expansion-panel-header>
                    <v-expansion-panel-content >
                        <div class="d-flex mt-5">
                            <div class="width-50" color="red">
                                <span class="text-h5 curse-underline ">Description:</span>
                                <br>
                                <span class="mt-7 pt-9"
                                    >Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </span>
                            </div>
                            <div  class="width-50">
                                <span class="text-h5 curse-underline">When:</span>
                                 <br>
                                <h4>Tuesday 16:00 - 18:00</h4>
                                <h4>Friday 17:00 - 18:00</h4>
                                <h4>Saturday 17:00 - 18:00</h4>
                                <h4>Sunday 17:00 - 18:00</h4>

                            </div>
                        </div>
                        <v-btn class="my-7 ml-3"  @click="scrollMeTo('registerForm')" color="#c36f2d" light outlined tile depressed>Register</v-btn>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'CursesPlan',
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
.width-50 {
    width: 48%;
    margin: auto;
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
</style>
