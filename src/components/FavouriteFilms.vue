<template>
    <div id="favourite_films">
        <h3>Favourite Films</h3>
            <ul>
                <li v-for="(favouriteFilm, index) in favouriteFilms">
                {{favouriteFilm.title}}
                <button v-on:click="handleDelete(index)">Remove from favourites</button>
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

<style>

</style>