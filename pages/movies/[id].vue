<script lang="ts" setup>
const route = useRoute();

const { data, error } = await useAsyncData(() => {
  const response = $fetch(
    `http://www.omdbapi.com/?apikey=e1d7a6a2&i=${route.params.id}`
  );
  return response;
});
</script>

<template>
  <div>
    <pre>
      {{ data }}
    </pre>

    <code>{{ error }}</code>
  </div>
</template>

<style scoped></style>
