<template>
    <ul class="movies mt-4">
        <FilmComponent v-for="film in films" :key="film.id" :filmElement="film"/>
    </ul>
</template>

<script>
import FilmComponent from './FilmComponent.vue'

export default {
    components: {
        FilmComponent
    },
    props: {
        films: Array,
        series: Array
    }
}
</script>

<style lang="scss">
.movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;  
}
</style>