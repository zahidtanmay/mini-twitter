<template>
  <v-app-bar app color="primary" dark>

    <v-toolbar-title class="headline text-uppercase hover" @click="$router.push('/')"
                     style="cursor: pointer;">
      <span>Mini Twitter</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="LOGOUT" v-if="isAuthenticated">
      <v-icon>mdi-logout</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'isAuthenticated',
    ]),
  },
  methods: {
    ...mapActions([
      'LOGOUT',
    ]),
  },
};
</script>
