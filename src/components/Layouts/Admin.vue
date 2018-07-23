<template>
  <v-app v-cloak>

    <!-- Sidebar -->
    <sidebar></sidebar>
    <!-- Sidebar -->

    <!-- Utilitybar -->
    <utilitybar></utilitybar>
    <!-- Utilitybar -->

    <!-- Main Content -->
    <v-content>
      <!-- Breadcrumbs -->
      <breadcrumbs></breadcrumbs>
      <!-- Breadcrumbs -->

      <!-- Main -->
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
      <!-- Main -->
    </v-content>
    <!-- Main Content -->

  </v-app>
</template>

<script>
export default {
  name: 'Admin',
}
</script>
