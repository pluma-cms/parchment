export const state = () => ({
  dataset: {
    headers: [
      { align: 'left', text: 'Featured Image', value: 'feature' },
      { align: 'left', text: 'Title', value: 'title' },
      { align: 'left', text: 'Author', value: 'user_id' },
      { align: 'left', text: 'Template', value: 'template' },
      { align: 'left', text: 'Created', value: 'created_at' },
      { align: 'left', text: 'Modified', value: 'updated_at' },
      { align: 'center', text: 'Actions', sortable: false },
    ],

    items: [],

    pagination: {
      rowsPerPage: 15,
    },

    search: {
      query: '',
    }
  },
})

export const getters = {
  dataset: state => state.dataset,
}

export const mutations = {
  GET (state, payload) {
    state.dataset = payload.dataset
  },

  emptyState () {
    this.replaceState({ dataset: null })
  },
}

export const actions = {
  get: ({commit}, payload) => {
    commit('CREATE', payload)
  },
}

export const page = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
