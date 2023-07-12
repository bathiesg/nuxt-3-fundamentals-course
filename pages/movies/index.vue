<script lang="ts" setup>
const query = ref("");
interface Search {
  Search: SearchElement[];
  totalResults: string;
  Response: string;
}

interface SearchElement {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
}

enum MovieType {
  Movie = "movie",
  Series = "series",
}

const movies = ref<SearchElement[]>([]);
const search = async () => {
  const response = await $fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=e1d7a6a2&s=${query.value}`
  );
  const { Search: searchResults } = response as { Search: SearchElement[] };
  console.log(searchResults);
  movies.value = searchResults;
};
</script>

<template>
  <div>
    <h1>Page: Movies</h1>
    <form @submit.prevent="search">
      <input type="search" v-model="query" />
      <button>search</button>
    </form>

    <ul class="movies-list">
      <li v-for="movie in movies" :key="movie.imdbID">
        <nuxt-link
          class="link"
          :to="{ name: 'movies-id', params: { id: movie.imdbID } }"
        >
          <img :src="movie.Poster" alt="movie.title" />
          <div class="description">
            <h3>{{ movie.Title }}</h3>
            <div>Type: {{ movie.Type }}</div>
            <div>Year: {{ movie.Year }}</div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.movies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
}

.description {
  margin: auto;
  width: 80%;
}
</style>
