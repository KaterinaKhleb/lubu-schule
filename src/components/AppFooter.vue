<template>
    <v-footer dark padless>
        <v-card style="width:100%" color="#c36f2d" flat tile>
            <v-card-title >
                <strong class="subheading"
                    >Get connected with us on social networks!</strong
                >
                <v-spacer></v-spacer>

                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="d-flex flex-column">
                <span>WIlhelmestraße 7</span>
                <span>71634 Ludwigsburg</span>
                <span>+35826352487</span>

            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data: () => ({
        icons: ['mdi-facebook', 'mdi-send', 'mdi-instagram'],
    }),
};
</script>
