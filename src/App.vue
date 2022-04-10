<template>
    <v-app id="app">
        <app-navigation></app-navigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
                    <app-footer></app-footer>
        </v-content>

    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'App',
    components: {
        AppNavigation,
        AppFooter,
    },

    data: () => ({
        icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }),

    computed: {
        ...mapGetters([])
    },

    methods: {
      ...mapActions(["getContent"])  
    },

    mounted: function () {
        this.getContent('de')
}
};
</script>

<style></style>
