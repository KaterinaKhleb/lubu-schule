<template>
    <span>
        <home-screen></home-screen>
        <home-details></home-details>
        <home-plans></home-plans>
    </span>
</template>

<script>
import HomeScreen from '@/components/HomeScreen';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';

export default {
    name: 'home',
    components: {
        HomeScreen,
        HomeDetails,
        HomePlans
    }
};
</script>
