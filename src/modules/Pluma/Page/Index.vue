<template>
  <div>
    <v-toolbar
      color="transparent"
      flat
      light
      >
      <v-toolbar-title>{{ trans('All Pages') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!empty" color="primary" :to="{name: 'pages.create'}">{{ trans('Create Page') }}</v-btn>
    </v-toolbar>

    <empty-state v-if="empty"></empty-state>

    <v-container v-else fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>

            <v-data-table
              :headers="dataset.headers"
              :items="dataset.items"
              :pagination.sync="dataset.pagination"
              :search="dataset.search.query"
              >
            </v-data-table>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EmptyState from './partials/EmptyState'
import store from './store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'PageIndex',

  components: {
    EmptyState,
  },

  computed: {
    ...mapGetters({
      dataset: 'page/dataset',
    }),

    empty: function () {
      return this.dataset.items.length === 0
    },
  },

  mounted () {
    console.log(this.dataset)
  }
}
</script>
