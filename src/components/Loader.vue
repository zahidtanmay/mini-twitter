<template>
  <v-dialog v-model="dialog" persistent hide-overlay max-width="110px">
    <div class="text-xs-center">
      <v-progress-circular :size="70" :width="7" indeterminate color="green"></v-progress-circular>
    </div>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    dialog: {
      get() {
        return this.$store.state.loader;
      },
      set(value) {
        this.$store.commit('SET_LOADER', value);
      },
    },
  },
};
</script>
<style scoped>
  .v-progress-circular {margin: 1rem;}
</style>

<style>
  .c-loader-dialog { box-shadow: inherit !important; }
</style>
