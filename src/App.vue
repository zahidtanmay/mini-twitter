<template>
  <v-app>

    <navbar></navbar>

    <v-content>

      <router-view></router-view>

      <loader/>

    </v-content>

    <snack-bar/>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Loader from '@/components/Loader.vue';
import SnackBar from '@/components/SnackBar.vue';

export default {
  name: 'App',

  components: {
    Loader,
    Navbar,
    SnackBar,
  },

  data: () => ({
    //
  }),
  mounted() {
    this.$store.commit('SET_USER_INFO');
  },
};
</script>
