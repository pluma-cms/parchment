import * as logo from '@/assets/logo.png'

export const state = () => ({
  sidebar: {
    model: true,

    clipped: false,
    floating: false,
    mini: false,

    title: 'Pluma CMS',
    logo: logo,
    tagline: 'CMS made easy',
  },
})

export const getters = {
  sidebar: state => state.sidebar,
  file: state => state.file,
}

export const mutations = {
  'CREATE' (state, payload) {
    state.sidebar = Object.assign(state.sidebar, payload)
  },

  'RENAME' (state, payload) {
    state.sidebar.renaming = payload.renaming
  },

  'SELECT_FILE' (state, payload) {
    state.file.selected = payload
  },

  emptyState () {
    this.replaceState({ sidebar: null })
  }
}

export const actions = {
  create: ({commit}, payload) => {
    commit('CREATE', payload)
  },

  rename: ({commit}, payload) => {
    commit('RENAME', payload)
  },

  select: ({commit}, payload) => {
    if (payload.type === 'file') {
      commit('SELECT_FILE', payload)
    }
  },
}

export const sidebar = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
