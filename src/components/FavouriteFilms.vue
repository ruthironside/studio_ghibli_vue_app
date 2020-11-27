<template>
  <div id="favourite_films">
      <h2>Favourite Films</h2>
      <ul>
          <li v-for="favouriteFilm in favouriteFilms">{{favouriteFilm.title}}</li>
      </ul>

  </div>
</template>

<script>
export default {
    name: 'favourite-films',
    props: ['favouriteFilms']

}
</script>

<style>

</style>