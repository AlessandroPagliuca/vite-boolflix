<template>
  <HeaderComp @on-search="getData" />
  <MainComp />
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,

  },
  data() {
    return {
      store

    }
  },
  methods: {
    getMovies() {
      const url = this.store.baseUrl + this.store.endpoint.movie;
      axios.get(url, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.moviesList = res.data.results;

      });

    },
    getSeries() {
      const url = this.store.baseUrl + this.store.endpoint.serie;
      axios.get(url, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.seriesList = res.data.results;

      });

    },
    getData(){
      this.getMovies();
      this.getSeries();
    }
  },

}
</script>

<style lang="scss" scoped></style>