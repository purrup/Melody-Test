<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="table-head" v-for="(head, index) of thead" :key="index">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d of data"
          :key="d.objectID"
          class="row">
          <td>{{ d.title ? d.title : 'No Title Yet' }}</td>
          <td>{{ d.author }}</td>
          <td>{{ d.num_comments ? d.num_comments : 0 }}</td>
          <td>{{ d.points }}</td>
          <td><a href="d.url">Read it</a></td>
          <td><button @click="onDelete(d)">delete</button></td>
        </tr>
      </tbody>
    </table>
    <button @click="onLoadMore">Load More</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      thead: ['Title', 'Author', 'Comments', 'Points', 'LInk', 'Delete'],
      dataAmount: 10
    }
  },
  computed: {
    ...mapState('table', {
      data: state => state.data
    })
  },
  mounted() {
    this.getData(this.dataAmount)
  },
  methods: {
    ...mapActions('table', ['getData']),
    onDelete(d) {
      this.$store.commit('table/DELETE_DATA', d.objectID)
    },
    onLoadMore() {
      this.dataAmount += 10
      this.$store.commit('table/LOAD_MORE_DATA', this.dataAmount)
    }
  }
}
</script>

<style lang="css" scoped>
.table-head {
  background-color: black;
  color: white;
}
.row {
  background: lightGrey;
}
</style>>

