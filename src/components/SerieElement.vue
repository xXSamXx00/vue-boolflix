<template>
    <li class="serie mb-3">
        <img :src="`https://image.tmdb.org/t/p/w342/${serieElement.poster_path}`" alt="">
        <p>{{ serieElement.name }}</p>
        <p>{{ serieElement.original_name }}</p>
        <div class="star">
            <img height="20" v-for="star in parseInt((serieElement.vote_average / 2).toFixed(0))" :key="star.id" src="../assets/star-solid.svg" alt="">
            <img height="20" v-for="emptyStar in parseInt(5 - (serieElement.vote_average / 2).toFixed(0))" :key="emptyStar.id" src="../assets/star-regular.svg" alt="">
        </div>
        <img height="30" class="my-3" :src="require(`../assets/${serieElement.original_language}.png`)" alt="">
    </li>
</template>

<script>
export default {
    props: {
        serieElement: Object
    }
}
</script>

<style lang="scss">
.serie {
    width: 400px;
    background-color: cornflowerblue;
    border: 1px solid black;
    border-radius: 5px;
    padding: 16px 20px 0;
}
</style>