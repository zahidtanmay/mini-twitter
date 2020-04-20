<template>

  <v-container fluid pa-3 style="min-height: 100vh;">

    <v-row>

      <posts/>

      <Profile/>

    </v-row>

  </v-container>

</template>

<script>
import { mapGetters } from 'vuex';
import Posts from '@/components/Posts.vue';
import Profile from '@/components/Profile.vue';

export default {
  computed: {
    ...mapGetters([
      'getFeedComponent',
    ]),
  },
  components: {
    Posts,
    Profile,
  },
  methods: {
    handlescrl() {
      if (this.bottomVisible() && this.$route.name === 'home' && this.getFeedComponent === 'LatestFeed') {
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
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handlescrl);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
