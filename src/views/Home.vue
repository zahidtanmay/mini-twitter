<template>

  <v-container fluid pa-3 style="min-height: 100vh;">

    <v-row>

      <posts/>

      <Profile/>

    </v-row>
  </v-container>
</template>

<script>
import Posts from '@/components/Posts.vue';
import Profile from '@/components/Profile.vue';

export default {
  components: {
    Posts,
    Profile,
  },
  created() {
    window.scrollTo(0, 0);
  },
  computed: {
  },
  mounted() {
    this.$store.dispatch('FETCH_DATA', { type: 'POST_DATA' });
  },
};
</script>
