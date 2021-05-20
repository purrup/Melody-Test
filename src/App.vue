<template>
  <div id="app">
      <h1>Top stories</h1>
      <br>
      <p>These stories com from the Hacker News serach API</p>
      <a href="https://hn.algolia.com/api">https://hn.algolia.com/api</a>
      <div class="search">
        <p>Search</p>
        <div class="searchSection">
          <input type="text" ref="search">
          <button @click="onSearch">Search</button>
        </div>
      </div>
      <Table/>
  </div>
</template>

<script>
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Table
  },
  methods: {
    onSearch() {
      // if no string in input, return all data
      if(!this.$refs.search.value) this.$store.dispatch('table/getData', 10)
      this.$store.commit('table/SEARCH_DATA', this.$refs.search.value)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.searchSection {
  display: flex;
  margin: 1rem 0;
}
.searchSection input {
  margin-right: 1rem;
}
</style>
