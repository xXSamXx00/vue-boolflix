<template>
    <div>
        <h2 class="text-center">Film</h2>
        <ul class="movies mt-4">
            <FilmComponent v-for="film in films" :key="film.id" :filmElement="film"/>
        </ul>
        <h2 class="text-center">Serie TV</h2>
        <ul class="series mt-4">
            <SerieElement v-for="serie in series" :key="serie.id" :serieElement="serie"/>
        </ul>
    </div>
</template>

<script>
import FilmComponent from './FilmComponent.vue'
import SerieElement from './SerieElement.vue'

export default {
    components: {
        FilmComponent,
        SerieElement
    },
    props: {
        films: Array,
        series: Array
    }
}
</script>

<style lang="scss">
h2 {
    font-size: 20px;
}
.movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;  
}
.series {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;  
}
</style>