<template>
  <v-navigation-drawer
    :clipped="sidebar.clipped"
    :floating="sidebar.floating"
    :mini-variant.sync="sidebar.mini"
    app
    fixed
    v-model="sidebar.model"
    >

    <!-- Brand -->
    <v-toolbar flat color="transparent">
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar tile>
            <img :src="sidebar.logo" width="40px">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title><strong v-html="sidebar.title"></strong></v-list-tile-title>
            <v-list-tile-sub-title class="caption" v-html="sidebar.tagline"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <!-- Brand -->

    <v-divider class="my-3 transparent"></v-divider>

    <v-list>
      <!-- TODO: make this recursive -->
      <template v-for="parent in menus">

        <!-- Menu with children -->
        <template v-if="parent.children">
          <v-list-group no-action v-model="parent.active">
            <v-icon slot="appendIcon" small>keyboard_arrow_down</v-icon>
            <v-list-tile ripple slot="activator" v-model="parent.active">
              <v-list-tile-action>
                <v-icon>{{ parent.meta.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ trans(parent.meta.title) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- Menu children -->
            <template v-for="submenu in parent.children">
              <v-divider v-if="submenu.meta.divider"></v-divider>
              <template v-else>
                <template v-if="submenu.children">

                </template>
                <v-list-tile
                  v-else
                  :to="{ name: submenu.name }"
                  exact
                  ripple
                  v-model="submenu.active"
                  >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ trans(submenu.meta.title) }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </template>
            <!-- Menu children -->
          </v-list-group>
        </template>
        <!-- Menu with Children -->
        <template v-else>
          <v-list-tile ripple v-model="parent.active" exact :to="{name: parent.name}">
            <v-list-tile-action>
              <v-icon>{{ parent.meta.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ trans(parent.meta.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

      </template>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import menus from '@/router/admin'
import store from './store'
import { mapGetters } from 'vuex'

export default {
  store,

  name: 'Sidebar',

  computed: {
    ...mapGetters({
      sidebar: 'sidebar/sidebar',
    }),

    menus: function () {
      return menus.children
    }
  },

  mounted () {
    console.log(menus)
  }
}
</script>
