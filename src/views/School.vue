<template>
    <span>
        <home-screen></home-screen>
        <home-details class="pt-4"></home-details>
        <curses-plan class="pt-4 pb-8"></curses-plan>
        <our-activities class="pt-4"></our-activities>
        <Formular title="available courses" formType="curses"></Formular>
    </span>
</template>

<script>
import HomeScreen from '@/components/HomeScreen';
import HomeDetails from '@/components/HomeDetails';
import CursesPlan from '@/components/CursesPlan';
import OurActivities from '@/components/OurActivities';
import Formular from '@/components/Formular';

export default {
    name: 'School',
    components: {
        HomeScreen,
        HomeDetails,
        CursesPlan,
        OurActivities,
        Formular
    }
};
</script>
