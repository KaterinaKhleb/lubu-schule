<template>
    <div>
        <camp-home></camp-home>
        <CampDescription class="pt-8"></CampDescription>
        <CampOffers class="pt-8"></CampOffers>
        <Registration title="Sommer Camp " formType="camp"></Registration>
    </div>
</template>

<script>
import CampHome from '@/components/CampHome';
import CampDescription from '@/components/CampDescription';
import CampOffers from '@/components/CampOffers';
import Registration from '@/components/RegistrationCamp';

export default {
    name: 'Menu',
    components: {
        CampDescription,
        CampHome,
        CampOffers,
        Registration
    }
};
</script>

<style scoped></style>
