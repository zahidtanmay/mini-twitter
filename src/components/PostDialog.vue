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
          v-if="!getPostUpdate"
        >
          Submit
        </v-btn>

        <v-btn
          class="ma-2"
          :loading="getPostSubmitLoading"
          :disabled="getPostSubmitLoading || !value"
          color="primary"
          @click="UPDATE_POST({content: value, id: postId})"
          v-if="getPostUpdate"
        >
          Update
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
    postId: null,
    loader: null,
    loading: false,
  }),
  computed: {
    ...mapGetters([
      'getPostSubmitLoading',
      'getPostUpdate',
      'getPostUpdateContent',
    ]),
    postDialog: {
      get() {
        return this.$store.state.postDialog;
      },
      set(v) {
        if (!v) {
          this.$store.commit('SET_POST_UPDATE', false);
          this.$store.commit('SET_POST_UPDATE_CONTENT', null);
        }
        this.$store.commit('SET_POST_DIALOG', v);
      },
    },
  },
  methods: {
    ...mapActions([
      'SUBMIT_POST',
      'UPDATE_POST',
    ]),
  },
  mounted() {
    if (this.getPostUpdate) {
      this.value = this.getPostUpdateContent.content;
      this.postId = this.getPostUpdateContent.id;
      console.log(this.getPostUpdateContent);
    }
  },
};
</script>
