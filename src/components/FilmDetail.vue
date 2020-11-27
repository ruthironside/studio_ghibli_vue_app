<template> 
    <div v-if="film" id="filmDetail">
        <h3>{{film.title}}</h3>
        <p>Description: {{film.description}}</p>
        <p>Director: {{film.director}}</p>
        <p>Producer: {{film.producer}}</p>
        <p>Release Date: {{film.release_date}}</p>
        <p>Rating: {{film.rt_score}}</p>
    </div>
    <div v-else>
        <p>Choose a film!</p>
    </div>
</template>

<script>
// import { eventBus } from "../main.js";
export default {
    name: 'film-detail',
    props: ['film']


}
</script>

<style>

</style>