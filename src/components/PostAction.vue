<template>
  <div class="post-action">
    <v-col cols="1">
      <v-btn color="#2c003e" text small>
        <v-icon left>mdi-pencil</v-icon>
      </v-btn>
    </v-col>

    <v-col cols="1">
      <v-btn color="#2c003e" text small @click="DELETE_POST(post.id)">
        <v-icon left>mdi-delete</v-icon>
      </v-btn>
    </v-col>
  </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['post'],
  methods: {
    ...mapActions([
      'DELETE_POST',
    ]),
  },
};
</script>

<style>
  .post-action{display: contents !important;}
</style>
