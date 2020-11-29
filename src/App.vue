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

    <button class="button" v-if="!favouriteFilms.includes(selectedFilm)" v-on:click="addtoFavourites">Add to favourites</button>

    <favourite-films class="favourite-film" v-if="selectedFilm" :favouriteFilms="favouriteFilms"></favourite-films>
      

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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 30px;
    background-image: url(https://movies.mxdwn.com/wp-content/uploads/2017/08/studio-ghibli_00343987.jpg);
    background-size:cover;
    text-align: left;
    color: #ffffff;
    margin-top: 40px;

}

  .header {
    font: bold 40px Avenir;
    margin: 0px;
    padding: 30px;
    text-align: center;
    color: rgb(254, 254, 254);
    font-size: 40px;
}

.main-container {
    margin: 30px;
    align-content: center;

  }



.button {
  border-radius: 5px;
  padding: 10px;
  font: bold 11px Avenir;
  text-decoration: none;
  background-color: #EEEEEE;
  color: #375bd3;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid #ffffff;
  border-right: 1px solid#375bd3;
  border-bottom: 1px solid#375bd3;
  border-left: 1px solid #ffffff;
  
}

option {
  font: bold 11px Helvetica;
}


</style>
