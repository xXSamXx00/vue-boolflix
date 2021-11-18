<template>
    <li class="movie mb-3">
        <p>{{ filmElement.title }}</p>
        <p>{{ filmElement.original_title }}</p>
        <p>{{ filmElement.original_language }}</p>
        <p>{{ filmElement.vote_average }}</p>
    </li>
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
    width: 400px;
    background-color: cornflowerblue;
    border: 1px solid black;
    border-radius: 5px;
    padding: 16px 20px 0;
}
</style>