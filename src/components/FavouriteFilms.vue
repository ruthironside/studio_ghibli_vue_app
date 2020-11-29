<template>
    <div id="favourite_films">
        <h2>Favourite Films</h2>
            <ul>
                <li v-for="(favouriteFilm, index) in favouriteFilms">
                {{favouriteFilm.title}}
                <button class="button" v-on:click="handleDelete(index)">remove</button>
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


</style>