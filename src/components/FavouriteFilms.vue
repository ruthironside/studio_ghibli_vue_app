<template>
    <div id="favourite_films">
        <h2>Favourite Films</h2>
            <ul>
                <li v-for="(favouriteFilm, index) in favouriteFilms">
                {{favouriteFilm.title}}
                <button class="removebutton" v-on:click="handleDelete(index)">remove</button>
                </li>
            </ul>

    </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
    name: 'favourite-films',
    props: ['favouriteFilms'],
    methods: {
        handleDelete: function(index) {
            eventBus.$emit('film-deleted', index);
        }
    }
}
</script>

<style scoped>

#favourite_films {
    text-decoration: none;
}

.favourite-film {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #375bd3;
    padding: 10px;
    padding-left: 30px;
    margin-top: 40px;
    margin-bottom: 10px;
    width: 41.5%;
    background-color: #ebf0ff;
    opacity: 0.6;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    border-radius: 5px;
}


.removebutton {
  align-content: right;
  border-radius: 5px;
  padding: 10px;
  font: bold 11px Avenir;
  text-decoration: none;
  background-color: #375bd3;
  color: #ffffff;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid #ffffff;
  border-right: 1px solid#375bd3;
  border-bottom: 1px solid#375bd3;
  border-left: 1px solid #ffffff;
}


</style>