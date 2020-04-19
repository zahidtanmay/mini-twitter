<template>

  <v-container fluid pa-3 style="min-height: 100vh;">

    <v-row>

      <posts/>

      <Profile/>

    </v-row>

  </v-container>
</template>

<script>
import Posts from '@/components/UserPosts.vue';
import Profile from '@/components/UserProfile.vue';

export default {
  components: {
    Posts,
    Profile,
  },
  methods: {
    handlescrl() {
      console.log('handle scrl PROFILE');
      if (this.bottomVisible()) {
        // this.$store.dispatch('FETCH_DATA', { type: 'APPEND_POST_DATA' });
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
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handlescrl);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.$store.commit('SET_PROFILE_ID', this.$route.params.name);
    this.$store.dispatch('FETCH_DATA', { type: 'USER_DATA' });
    this.$store.commit(('RESET_POST_DATA'));
  },
};
</script>
