<template>
    <div>
        <h2 class="text-center">Film</h2>
        <div class="row mt-4">
            <FilmComponent v-for="film in films" :key="film.id" :filmElement="film"/>
        </div>
        <h2 class="text-center">Serie TV</h2>
        <div class="row mt-4">
            <SerieElement v-for="serie in series" :key="serie.id" :serieElement="serie"/>
        </div>
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
.row {
    margin: 0 !important;
}
</style>