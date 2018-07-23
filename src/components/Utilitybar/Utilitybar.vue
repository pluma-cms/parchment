<template>
  <v-toolbar
    app
    flat
    >

    <v-toolbar-side-icon @click="localstorage({'single.sidebar.model': (sidebar.model = !sidebar.model)})"></v-toolbar-side-icon>

    <!-- v-shortkey="['ctrl', '/']" @shortkey.native="search().open($event)" -->
    <v-text-field
      :placeholder="trans('Search')"
      flat
      solo
      hide-details
      >
    </v-text-field>

    <v-spacer></v-spacer>

    <v-menu left offset-y nudge-width="200px" min-width="200px">
      <v-avatar slot="activator" size="38px">
        <img :src="user.avatar" :alt="user.displayname">
      </v-avatar>
      <v-list>
        <v-list-tile href="#">
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ trans('My Profile') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="#">
          <v-list-tile-action>
            <v-icon>mdi-book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ trans('My Courses') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile href="#">
          <v-list-tile-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ trans('Logout') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

  </v-toolbar>
</template>

<script>
export default {
  name: 'Utilitybar',

  data () {
    return {
      // TODO: move My Menus to store and to modules
      // TODO: move to store
      user: {
        avatar: '//source.unsplash.com/30x30?girl',
        displayname: 'Jane Does',
      }
    }
  }
}
</script>
