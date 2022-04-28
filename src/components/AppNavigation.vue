<template>
    <span>
        <v-app-bar
            fixed
            color="#456769"
            dark
        >
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <span class="title">Lubu School</span>
            </router-link>
            <v-btn
                depressed
                dark
                outlined
                tile
                class="hidden-sm-and-down ml-12 nav-menu"
                to="/"
                data-cy="menuBtn"
            >Curses</v-btn>
                <v-btn
                    depressed
                    dark
                    outlined
                    tile
                    class="hidden-sm-and-down ml-12 nav-menu"
                    to="/sommercamp"
                    data-cy="menuBtn"
                >Summer Camp</v-btn>
                    <v-spacer class="hidden-sm-and-down"></v-spacer>
                    <v-col cols="1">
                        <v-select
                            v-model="selectedLanguage"
                            :items="langs"
                            append-outer-icon="mdi-earth"
                            menu-props="auto"
                            hide-details
                        ></v-select>
                    </v-col>

                        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            drawer: false,
            selectedLanguage: 'en',
            langs: ['en', 'ukr', 'ru', 'de'],
        };
    },
  
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
.title {
    color: white;
}
</style>
