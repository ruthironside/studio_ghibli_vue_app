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

<style scoped>

#filmDetail {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #375bd3;
    padding: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%;
    background-color: #ebf0ff;
    opacity: 0.6;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    border-radius: 5px;
}
</style>