<template>
    <span>
        <home-screen></home-screen>
        <home-details></home-details>
        <home-plans></home-plans>
        <formular></formular>
    </span>
</template>

<script>
import HomeScreen from '@/components/HomeScreen';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';
import Formular from '@/components/Formular';

export default {
    name: 'home',
    components: {
        HomeScreen,
        HomeDetails,
        HomePlans,
        Formular,
    },
};
</script>
