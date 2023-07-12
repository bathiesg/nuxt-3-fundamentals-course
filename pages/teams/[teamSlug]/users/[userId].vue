<script setup>
const route = useRoute();
const message = computed(
  () =>
    `I am on team: ${route.params.teamSlug} and my user id is: ${route.params.userId}`
);
</script>

<template>
  <div>{{ message }}</div>
</template>

<style scoped></style>
