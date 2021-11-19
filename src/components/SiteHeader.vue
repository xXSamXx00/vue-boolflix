<template>
    <header>
        <div class="logo">
            <img src="../assets/svg/logo.svg" alt="">
        </div>
        <div class="search text-center">
            <input v-model="filmSearch" type="search" placeholder="Cerca un Film" @keyup.enter="$emit('search_film', filmSearch)">
            <button class="btn ms-4" @click="$emit('search_film', filmSearch)">Cerca</button>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    .search {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    input {
        height: 38px;
        width: 350px;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 10px;
    }
    button {
        background-color: #E50914;
    }
}
}
</style>
