<template>
    <v-container fluid fill-height class="camp-home" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="title-camp-home white--text text-center">
                {{ campName }}
            </div>
            <div class="d-flex">
                <v-icon color="white">mdi-map-marker</v-icon>
                <span class="white--text">Aschenhütte, Bad Herrenalb </span>
            </div>

            <div
                class=" subtitle-camp font-weight-bold white--text text-center"
            >
                {{ campMotto }}
            </div>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'HomeScreen',

    computed: {
        ...mapGetters(['campName', 'campMotto'])
    }
};
</script>

<style scoped>
.camp-home {
    background: url('../assets/camp.png') center no-repeat;
    background-size: cover;
    height: 100vh;
}

.subtitle-camp {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
}
.title-camp-home {
    font-weight: 900;
    font-size: 5rem;
}

/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px) {
}

/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {
}

/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {
    .title-camp-home {
        font-weight: 900;
        font-size: 2rem;
    }
    .subtitle-camp {
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2rem;
    }
}

@media (max-width: 480px) {
    .title-camp-home {
        font-weight: 900;
        font-size: 2rem;
    }
    .subtitle-camp {
        font-style: normal;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
}
</style>
