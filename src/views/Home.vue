<template>
    <span>
        <home-screen></home-screen>
        <home-details></home-details>
        <curses-plan></curses-plan>
        <Formular title="Curses Registration Form" formType="curses"></Formular>
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
