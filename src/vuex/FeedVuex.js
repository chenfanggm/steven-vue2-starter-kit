// ------------------------------------
// Constants
// ------------------------------------
export const ADD_FEED = 'feed/ADD_FEED'

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
  getFeeds: (state) => {
    return state.feeds
  }
}
// ------------------------------------
// Actions
// ------------------------------------
const actions = {
  addFeed({ state, commit }) {
    commit(ADD_FEED, 'Hello, this is a new feed from Vuex!')
  }
}

// ------------------------------------
// Init State
// ------------------------------------
const state = {
  feeds: [
    'It\' a good day today!',
    'I think I could be a president some day.',
    'Do you love me?',
    'How are you doing today?',
    'I like riding my new bicycle!'
  ]
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
  ADD_FEED: function (state, newFeed) {
    state.feeds.push(newFeed)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

