<template>
  <v-snackbar
    v-model="getSnackBar.status"
    :color="getSnackBar.type"
    multi-line="multi-line"
    right="true"
    timeout="6000"
    top="true"
  >
    {{ getSnackBar.text }}
    <!--<v-btn-->
      <!--dark-->
      <!--text-->
      <!--@click="snackbar = false"-->
    <!--&gt;-->
      <!--Close-->
    <!--</v-btn>-->
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getSnackBar',
    ]),
  },
};
</script>
