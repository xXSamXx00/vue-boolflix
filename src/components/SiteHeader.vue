<template>
    <header>
        <SearchBox/>
    </header>
</template>

<script>
import SearchBox from './SearchBox.vue'

export default {
  components: {
    SearchBox
  }
}
</script>

<style lang="scss">
header {
    height: 100px;
    background-color: grey;
}
</style>
