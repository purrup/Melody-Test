import axios from '../../axios.js'
// import getData from '../api.js'

const state = {
  originData: {},
  data: {}
}

const getters = {

}

const mutations = {
  SET_ORIGIN_DATA(state, data) {
    state.originData = data
  },
  SET_DATA(state, data) {
    state.data = data
  },
  SEARCH_DATA(state, string) {
    state.data = state.data.filter(d => {
      if(d.title !== null) {
        return d.title.includes(string)
      }
    })
  },
  DELETE_DATA(state, objectID) {
    state.data = state.data.filter(d => {
      return d.objectID !== objectID
    })
  },
  LOAD_MORE_DATA(state, dataAmount) {
    state.data = state.originData.slice(0, dataAmount)
  }
}

const actions = {
  async getData ({ commit }, dataAmount) {
    try {
      console.log('dataAmount:', dataAmount)
      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=`)
      commit('SET_ORIGIN_DATA', data.hits)
      commit('SET_DATA', data.hits.slice(0, dataAmount))
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
