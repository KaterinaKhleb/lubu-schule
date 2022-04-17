
<template>
    <div>
        <camp-home></camp-home>
        <CampDescription class="mt-8"></CampDescription>
    </div>
</template>

<script>
import CampHome from '@/components/CampHome';
import CampDescription from '@/components/CampDescription';
export default {
    name: 'Menu',
    components: {
        CampDescription,
        CampHome
    }
};
</script>

<style scoped></style>