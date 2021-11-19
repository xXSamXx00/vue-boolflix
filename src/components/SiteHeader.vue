<template>
    <header>
        <div class="search text-center">
        <input v-model="filmSearch" type="search" placeholder="Cerca un Film">
        <button class="btn btn-primary ms-4" @click="$emit('search_film', filmSearch)">Cerca</button>
    </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            filmSearch: ""
        }
    }
}
</script>

<style lang="scss">
header {
    height: 100px;
    background-color: black;
    .search {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    input {
        height: 38px;
        width: 300px;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 10px;
    }
}
}
</style>
