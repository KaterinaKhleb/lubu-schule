<template>
    <v-footer  padless>
        <div class="flex text-right" color="#456769" flat tile>
              <img src="../assets/bosch.png" alt="bosch logo">
              <img class="mb-5 ml-8" src="../assets/dkh.png" alt="dkh logo">
              <img class="ml-8 img-small" src="../assets/ifwbk.png" alt="ifwbk logo">
              <img class="ml-8 mb-3" src="../assets/primavera.png" alt="ifwbk logo">

        </div>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data: () => ({
        icons: [
            {
                text: 'Tlegramm:',
                icon: 'mdi-send',
                href: 'https://t.me/+7pzjhBIQFWcwOTNi'
            }
        ]
    })
};
</script>
<style>
img{
    width: 120px;
    height: auto;
}
.img-small{
    width: 100px;
    height: auto;;
}
</style>

