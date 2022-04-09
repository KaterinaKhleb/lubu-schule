<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex class="display-2  black--text text-xs-center my-5"
                >Available free courses</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-expansion-panels focusable popup>
                <v-expansion-panel v-for="(item, i) in 5" :key="i">
                    <v-expansion-panel-header light color="#a7a59f">
                        Curse blabla
                    </v-expansion-panel-header>
                    <v-expansion-panel-content color="#d9d8d4">
                        <div class="d-flex mt-5">
                            <div class="width-50">
                                <span class="text-h6">Description:</span>
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
                            <div>
                                <span>When?</span>

                            </div>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    methods: {
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        },
    },
};
</script>

<style scoped>
.width-50 {
    width: 50%;
}
</style>
