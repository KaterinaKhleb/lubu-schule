
<template>
    <div>
        <camp-home></camp-home>
        <CampDescription class="mt-8"></CampDescription>
        <CampOffers class="mt-8"></CampOffers>
        <Formular title="Sommer Camp Registration Form" formType="camp"></Formular>

    </div>
</template>

<script>
import CampHome from '@/components/CampHome';
import CampDescription from '@/components/CampDescription';
import CampOffers from '@/components/CampOffers';
import Formular from '@/components/Formular';

export default {
    name: 'Menu',
    components: {
        CampDescription,
        CampHome,
        CampOffers,
        Formular
    }
};
</script>

<style scoped>
</style>