<template>
    <header>
        <SearchBox :filmSearch="searchText" @search_film="searchFilm"/>
        <ul class="movies">
            <li class="movie" v-for="film in films" :key="film.id">
                <p>{{ film.title }}</p>
                <p>{{ film.original_title }}</p>
                <p>{{ film.original_language }}</p>
                <p>{{ film.vote_average }}</p>
            </li>
        </ul>
    </header>
</template>

<script>
import SearchBox from './SearchBox.vue'
import axios from 'axios'

export default {
    components: {
        SearchBox
    },
    data() {
        return {
            films: [],
            searchText: ""
        }
    },
    methods: {
        searchFilm(text) {
            this.searchText = text
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=213b9fdb9078ddf64c88787abf1f0f84&language=it-IT&query=${this.searchText}&page=1&include_adult=true`)
                .then(r => {
                    this.films = r.data.results
                }
            ).catch(e => {
                console.log(e, "DIO PORCO!");
            })
        }
    }
}
</script>

<style lang="scss">
header {
    height: 100px;
    background-color: grey;
}
</style>
