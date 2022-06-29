<template>
    <v-footer  padless>
        <div class="flex flex-row text-right" color="#456769" flat tile>
            <span class="thanksText">Wir danken unsere Sponsoren!</span>
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
.thanksText{
    position: absolute;
    top:40px;
    right:580px;
    font-size: 1.5rem
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
img{
    width: 60px;
    height: auto;
}
.img-small{
    width: 50px;
    height: auto;
}
.thanksText{
    display: none
}
}

@media (max-width: 480px) {
img{
    width: 60px;
    height: auto;
}
.img-small{
    width: 50px;
    height: auto;;
}
.thanksText{
    display: none
}

}
</style>

