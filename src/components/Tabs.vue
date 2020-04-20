<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="white"
      color="deep-purple accent-4"
      right
    >
      <v-tab v-for="(item) in tabitems" :key="item">{{ item }}</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tabitems: [
      'Latest',
      'Trending',
    ],
  }),
  computed: {
    tab: {
      get() {
        return this.$store.state.tab;
      },
      set(value) {
        if (value) {
          this.$store.commit('SELECT_TRENDING');
        } else {
          this.$store.commit('SELECT_LATEST');
        }
      },
    },
  },
};
</script>
