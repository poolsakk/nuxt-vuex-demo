import axios from 'axios'

export const state = () => ({
    shows: [],
    post: {}
})
  
export const mutations = {
    fetchShows (state, payload) {
        state.shows = payload
    },
    getById(state, payload){
        state.post = payload
    }
}

export const actions = {
    async nuxtServerInit ({ commit, dispatch }) {
        await dispatch('fetchShowsAsync')
    },
    async fetchShowsAsync({ commit }) {
        await axios.get('https://api.tvmaze.com/search/shows?q=batman').then((res) => {
            commit('fetchShows', res.data.map(entry => entry.show))
        })
    }
}