<template>
    <li class="serie mb-3">
        <p>{{ serieElement.name }}</p>
        <p>{{ serieElement.original_name }}</p>
        <p>{{ serieElement.vote_average }}</p>
        <img height="30" class="mb-3" :src="require(`../assets/${serieElement.original_language}.png`)" alt="">
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