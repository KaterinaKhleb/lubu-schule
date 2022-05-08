<template>
    <span>
        <home-screen ></home-screen>
        <home-details class="pt-4"></home-details>
        <curses-plan class="pt-4 pb-8"></curses-plan>
        <Formular title="available courses" formType="curses"></Formular>
    </span>
</template>

<script>
import HomeScreen from '@/components/HomeScreen';
import HomeDetails from '@/components/HomeDetails';
import CursesPlan from '@/components/CursesPlan';
import Formular from '@/components/Formular';

export default {
    name: 'home',
    components: {
        HomeScreen,
        HomeDetails,
        CursesPlan,
        Formular,
    },
};
</script>
