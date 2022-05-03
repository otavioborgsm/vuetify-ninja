<template>
  <v-app>
    <default-navbar/>
    <v-main class="grey lighten-4 mb-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import DefaultNavbar from './components/DefaultNavbar.vue'

export default {
  name: 'App',
  components: { DefaultNavbar },

  data: () => ({
    //
  }),
};
</script>
