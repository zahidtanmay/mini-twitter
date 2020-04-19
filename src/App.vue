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
  methods: {
    handlescrl() {
      if (this.bottomVisible()) {
        this.$store.dispatch('FETCH_DATA', { type: 'APPEND_POST_DATA' });
      }
    },
    bottomVisible() {
      const scrolly = window.scrollY;
      const visible = document.documentElement.clientHeight;
      let pageHeight = null;
      if (document.documentElement.clientWidth <= 800
        && document.documentElement.clientHeight <= 600) {
        pageHeight = document.documentElement.scrollHeight - 60;
      } else {
        pageHeight = document.documentElement.scrollHeight;
      }
      const bottomOfPage = visible + scrolly >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
  },
  created() {
    window.addEventListener('scroll', this.handlescrl);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.$store.commit('SET_USER_INFO');
  },
};
</script>
