<template>
    <v-container fluid id="curseSection" grid-list-lg>
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
            <v-flex class="display-2  black--text text-xs-center my-5"
                ><span>Available</span> <span> free courses</span></v-flex
            >
        </v-layout>
        <v-layout row wrap >
            <v-expansion-panels popup>
                <v-expansion-panel v-for="(curse, i) in curses" :key="i">
                    <v-expansion-panel-header light >
                        {{curse.name}}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content >
                        <div class="d-flex mt-5">
                            <div class="width-50" color="red">
                                <span class="text-h5 curse-underline ">Description:</span>
                                <br>
                                <div class=" pt-6"
                                    >{{curse.desc}}
                                </div>
                            </div>
                            <div  class="width-50 ml-12">
                                <span class="text-h5 curse-underline">Groups</span>
                                 <br>
                                 <div class="pt-6" v-for="(group) in curse.groups " :key="group.group">
                                     <div><h4>{{group.group}}: {{group.time}}</h4></div>
                                 </div>
                                

                            </div>
                        </div>
                        <v-btn class="my-7 ml-3"  @click="scrollMeTo('registerForm')" color="#c36f2d" light outlined tile depressed>Register</v-btn>
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
export default {
    name: 'CursesPlan',
       data() {
        return {
            curses: [
                {
                    name: 'English',
                    desc: 'English lessons are divided into two age groups - children (5-10 y.o.) and teenagers(11 - 16 y.o.). The level of the language depends on the group and varies from A1 to B2.',
                    groups: [{group: "Children", time: "Saturday 10:00 - 10:45"},{group: "Teenagers", time: "Saturday 11:00 - 11:45"} ]
                },
                      {
                    name: 'German',
                    desc: 'German lessons are divided into three groups - for children, teenagers and theor parents. Level od the language is A1-A2. Learning material for adults has different topics, than material for children.',
                    groups: [{group: "Children", time: "Saturday 11:00 - 11:45"},{group: "Teenagers", time: "Saturday 10:00 - 10:45"}, {group: "Parents", time: "Saturday 10:00 - 11:45"} ]
                },
                    {
                    name: 'Drawing',
                    desc: 'Art classes are focused on providing children an opportunity to enhance their creativity, improve imagination and let their parents have some break durin the coffe break ;)',
                    groups: [{group: "Children", time: "Saturday 12:00 - 11:45"},{group: "Teenagers", time: "Saturday 12:00 - 12:45"}]
                },
        
            ],
        };
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
#curseSection{
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
.dots-curses{
    position: relative;
    left: 80px;
    bottom:80px;
    height: 120px;
    width: auto
}
</style>
