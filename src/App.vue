<template>
  <div class="body">
    <header class="header">Studio Ghibli Films</header>
    <div class="main-container">
      <!-- <films-list :films='films'></films-list> -->
    <label for="film_select">Select a Film:</label>
    <select id="film_select" v-model="selectedFilm">
      <option disabled value="">Select a film</option>
      <option v-for="film in films" :key="film.id" :value="film" >{{film.title}}</option>
    </select>

    <film-detail v-if="selectedFilm" :selectedFilm='selectedFilm'></film-detail>

      

    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import FilmsList from './components/FilmsList.vue';
import FilmDetail from './components/FilmDetail.vue';

export default {
  name: 'app',
  data() {
    return {
      films: [],
      selectedFilm: null
      
    }
  },
  components: {
    'films-list': FilmsList,
    'film-detail': FilmDetail
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(films => this.films = films)

    eventBus.$on('film-selected', (film) => {
      this.selectedFilm = film
    })
  }
}
</script>

<style>

  body {
    font-family: helvetica;
    margin: 30px;
  }

  .header {
    margin: 0px;
    padding: 30px;
    text-align: center;
    color: rgb(13, 94, 75);
    font-size: 30px;
}

.main-container {
    align-content: center;
  }

</style>
