<template>
    <div class="movie col-sm-12 col-md-4 col-lg-2 mb-5">
        <div class="card_element">
            <div class="img">
                <img v-if="filmElement.poster_path != null" :src="`https://image.tmdb.org/t/p/w342/${filmElement.poster_path}`" alt>
                <img width="342" v-else src="https://media.istockphoto.com/vectors/internet-error-page-not-found-in-vertical-orientation-for-mobile-a-vector-id1252582562?k=20&m=1252582562&s=170667a&w=0&h=O1wwtikUXIdVVBKzIEDHvd9MDnwoeuClx90cuIq1SEo=" alt>
                <div class="text_over">
                    <p><strong>Titolo</strong>: {{ filmElement.title }}</p>
                    <p><strong>Titolo originale</strong>: {{ filmElement.original_title }}</p>
                    <div class="star">
                        <strong>Voto</strong>:
                        <img height="20" v-for="star in parseInt((filmElement.vote_average / 2).toFixed(0))" :key="star.id" src="../assets/svg/star-solid.svg" alt="">
                        <img height="20" v-for="emptyStar in parseInt(5 - (filmElement.vote_average / 2).toFixed(0))" :key="emptyStar.id" src="../assets/svg/star-regular.svg" alt="">
                    </div>
                    <strong>Lingua</strong>:
                    <img height="30" class="my-3" :src="require(`../assets/flag/${filmElement.original_language}.png`)" alt="">
                    <p><strong>Overview</strong>:</p> 
                    <p class="overview">{{ filmElement.overview }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        filmElement: Object
    }
}
</script>

<style lang="scss">
.movie {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>