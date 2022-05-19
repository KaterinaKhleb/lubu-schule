<template>
    <v-footer dark padless>
        <v-card style="width:94%" color="#456769" flat tile>
            <v-card-title >
                <!-- <strong class="subheading"
                    >Get connected with us on social networks!</strong
                > -->
                <v-spacer></v-spacer>

                <span class="mr-4"> Telegramm:  </span> <v-btn v-for="icon in icons" :href="icon.href" :key="icon.text"  dark icon>
                    <v-icon  size="24px">
                     {{ icon.icon }}
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
        icons: [{text: "Tlegramm:", icon: 'mdi-send', href: "https://t.me/+7pzjhBIQFWcwOTNi" } ],
    }),
};
</script>
