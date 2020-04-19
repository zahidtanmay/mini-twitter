<template>
  <v-snackbar
    v-model="getSnackBar.status"
    :color="getSnackBar.type"
    multi-line="multi-line"
    :right="right"
    :timeout="timeout"
    :top="top"
    v-if="getSnackBar"
  >
    {{ getSnackBar.text }}
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    top: true,
    right: true,
    timeout: 6000,
  }),
  computed: {
    ...mapGetters([
      'getSnackBar',
    ]),
  },
};
</script>
