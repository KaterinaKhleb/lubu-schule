<template>
    <span>
        <v-app-bar fixed color="#456769" dark>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <span  class="title">Lubu School</span>
            </router-link>
            <v-btn
                depressed
                dark
                outlined
                tile
                class="hidden-sm-and-down ml-12 nav-menu"
                to="/menu"
                data-cy="menuBtn"
                >Curses</v-btn
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>
                <v-btn  to="/sign-in" tile depressed light data-cy="signinBtn">SIGN IN</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Menu', url: '/menu' },
                { title: 'Profile', url: '/about' },
                { title: 'Sign In', url: '/sign-in' },
                { title: 'Join', url: '/join' },
            ],
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        },
    },
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
