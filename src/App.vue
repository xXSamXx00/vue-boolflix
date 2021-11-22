<template>
  <div id="app">
    <SiteHeader :filmSearch="searchText" @search_film="searchFilm"/>
    <SiteMain :films="films" :series="series"/>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain
  },
  data() {
    return {
      films: [],
      series: [],
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
        console.log(e, "ERROR!");
      })
      axios
        .get(`https://api.themoviedb.org/3/search/tv?api_key=213b9fdb9078ddf64c88787abf1f0f84&language=it-IT&page=1&query=${this.searchText}&include_adult=true`)
        .then(r => {
          this.series = r.data.results
        }
      ).catch(e => {
        console.log(e, "ERROR!");
      })
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
body {
  background-color: black;
  color: white;
}

.img {
  position: relative;
}

.img > img {
  transition: 1s;
  height: 450px;
  width: 300px;
}

.text_over {
  position: absolute;
  top: 0;
  height: 0%;
  width: 100%;
  filter: opacity(0);
  transition: 1.5s;
  visibility: hidden;
  text-align: center;
  padding: 20px;
  .overview{
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: red;
    }
  }
}

.overview {
  overflow-y: auto;
  height: 40%;
}

.card_element {
  height: 500px;
  &:hover {
    .img > img {
      filter: opacity(0.5) blur(5px);
    }
    .text_over {
      visibility: visible;
      height: 430px;
      filter: opacity(1);
    }
  }
}
</style>
