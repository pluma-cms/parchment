<template>
  <section>
    <v-toolbar
      color="transparent"
      flat
      light
      >
      <v-toolbar-title>{{ trans('Library') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!empty" color="primary" :to="{name: 'pages.create'}">{{ trans('Upload') }}</v-btn>
    </v-toolbar>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <media-list></media-list>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Index',
}
</script>
