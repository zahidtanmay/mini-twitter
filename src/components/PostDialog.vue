<template>
  <v-dialog v-model="postDialog" max-width="500px">
    <v-card>
      <v-card-text class="pb-0">
        <v-row>
        <v-col cols="12" md="12" class="pb-0">
          <v-textarea
            outlined
            name="input-7-4"
            label="Your post"
            v-model="value"
          ></v-textarea>
        </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          class="ma-2"
          :loading="getPostSubmitLoading"
          :disabled="getPostSubmitLoading || !value"
          color="primary"
          @click="SUBMIT_POST({content: value})"
        >
          Submit
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    value: '',
    loader: null,
    loading: false,
  }),
  computed: {
    ...mapGetters([
      'getPostSubmitLoading',
    ]),
    postDialog: {
      get() {
        return this.$store.state.postDialog;
      },
      set(v) {
        this.$store.commit('SET_POST_DIALOG', v);
      },
    },
  },
  methods: {
    ...mapActions([
      'SUBMIT_POST',
    ]),
  },
};
</script>
