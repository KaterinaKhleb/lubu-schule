<template>
    <v-app-bar class="nav" fixed color="#456769" dark>
        <router-link class="hidden-sm-and-down mr-3" to="/">
            <span class="title">KIT School</span>
        </router-link>
        <v-spacer class="hidden-sm-and-down"></v-spacer>

        <!-- <v-btn
                depressed
                dark
                outlined
                tile
                class="hidden-sm-and-down  mr-5 nav-menu"
                to="/"
                data-cy="menuBtn"
            >Школа</v-btn> -->
        <!-- <v-btn
            depressed
            dark
            outlined
            tile
            class="mr-6 nav-menu "
            to="/sommercamp"
            data-cy="menuBtn"
            >Summer Camp</v-btn
        > -->
        <!-- <v-col class="lang-selector" cols="1">
            <v-select
                v-model="selectedLanguage"
                :items="langs"
                append-outer-icon="mdi-earth"
                menu-props="auto"
                hide-details
                @change="getContent(selectedLanguage)"
            ></v-select>
        </v-col> -->
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'AppNavigation',
    data() {
        return {
            drawer: false,
            selectedLanguage: 'de',
            langs: ['en', 'ukr', 'ru', 'de']
        };
    },
    methods: {
        ...mapActions(['getContent'])
    }
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
.nav-menu {
    border: none !important;
    border-bottom: 1px solid white !important;
}
.lang-selector {
    max-width: unset !important ;
    width: 30%;
}
/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px) {
}

/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {
    .lang-selector {
        max-width: unset !important ;
        width: 30%;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
    }
    /deep/.v-toolbar__content {
        width: 100% !important;
        justify-content: space-between !important;
    }
}

/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {
    .lang-selector {
        max-width: unset !important ;
        width: 30%;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
    }
    /deep/.v-toolbar__content {
        width: 100% !important;
        justify-content: space-between !important;
    }
}

@media (max-width: 480px) {
    .lang-selector {
        flex: auto !important;
        max-width: unset !important ;
        width: 30%;
    }
    .nav {
        display: flex;
        flex-direction: row;
    }
    /deep/.v-toolbar__content {
        width: 100% !important;
        justify-content: space-between !important;
    }
}
</style>
