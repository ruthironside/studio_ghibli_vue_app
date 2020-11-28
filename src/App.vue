<template>
  <div class="body">
    <header class="header">Studio Ghibli Films</header>
    <div class="main-container">
    <label for="film_select">Pick a film:</label>
    <select id="film_select" v-model="selectedFilm">
      <option disabled value="">Select a film</option>
      <option v-for="film in films" :key="film.id" :value="film" >{{film.title}}</option>
    </select>

    <film-detail v-if="selectedFilm" :film='selectedFilm'></film-detail>

    <button v-if="!favouriteFilms.includes(selectedFilm)" v-on:click="addtoFavourites">Add to favourites</button>

    <favourite-films v-if="selectedFilm" :favouriteFilms="favouriteFilms"></favourite-films>
      

    </div>

    
  </div>
</template>

<script>
import { eventBus } from './main.js'
import FilmsList from './components/FilmsList.vue';
import FilmDetail from './components/FilmDetail.vue';
import FavouriteFilms from './components/FavouriteFilms.vue';

export default {
  name: 'app',
  data() {
    return {
      films: [],
      selectedFilm: null,
      favouriteFilms: []
      
    }
  },
  components: {
    'films-list': FilmsList,
    'film-detail': FilmDetail,
    'favourite-films': FavouriteFilms

  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(films => this.films = films)

    eventBus.$on('film-selected', (film) => {
      this.selectedFilm = film;
    }) 

    eventBus.$on('film-deleted', (index) => {
      this.favouriteFilms.splice(index, 1);
    })
  },
  methods: {
    addtoFavourites: function() {
      this.favouriteFilms.push(this.selectedFilm)
    }
  }
}
</script>

<style>

  body {
    font-family: helvetica;
    margin: 30px;
    background-image: url(https://musicboxtheatre.com/sites/default/files/styles/movie_stills/public/events/studio-ghibli-matinees/studio-ghibli-logo.jpg?itok=nsaBFZ6u);
    background-size:auto
  
  }

  .header {
    margin: 0px;
    padding: 30px;
    text-align: center;
    color: rgb(254, 254, 254);
    font-size: 30px;
    background-size: cover;
    background: url('https://dw9to29mmj727.cloudfront.net/promo/2016/5541-Ghibli_SeriesHeaders_Kiki_2000x800.jpg')
}

.main-container {
    align-content: center;
  }

#filmDetail {
  background-color: #ffffff;
  padding: 30px
}

</style>
