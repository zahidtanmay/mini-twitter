<template>
  <v-app>

    <navbar></navbar>

    <v-content>

      <router-view></router-view>

      <loader/>

    </v-content>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'App',

  components: {
    Loader,
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
