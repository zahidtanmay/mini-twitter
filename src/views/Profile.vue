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
  mounted() {
    this.$store.commit('SET_PROFILE_ID', this.$route.params.name);
    this.$store.dispatch('FETCH_DATA', { type: 'USER_DATA' });
    this.$store.commit(('RESET_POST_DATA'));
  },
};
</script>
