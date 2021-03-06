<template>
  <v-dialog v-model="dialog" persistent scrollable max-width="600px">
    <v-card>
      <v-card-text v-if="getComments">
        <v-subheader v-text="`${getComments.length} Comments`"></v-subheader>
        <v-col cols="12" class="py-0" v-if="isAuthenticated">
          <v-textarea
            label="Comment"
            auto-grow
            outlined
            rows="1"
            row-height="15"
            hide-details
            v-model="value"
          ></v-textarea>
          <v-card-actions class="py-0">
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="postComment"
                   v-if="!getCommentUpdate">Save</v-btn>
            <v-btn color="blue darken-1" text @click="updateComment"
                   v-if="getCommentUpdate">Update</v-btn>
          </v-card-actions>
        </v-col>
        <v-list two-line v-if="getComments">
          <template v-for="(comment, index) in getComments">
            <v-list-item :key="`comment-list-key-${index}`">
              <v-list-item-avatar color="indigo">
                <span class="white--text headline">{{comment.user.first_name | avatar}}</span>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="comment.user.first_name"></v-list-item-title>
                <v-list-item-subtitle >{{comment.content}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action style="display: block;">
                <v-btn icon @click="EDIT_COMMENT({comment})">
                  <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="DELETE_COMMENT(comment.id)">
                  <v-icon color="grey lighten-1">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>

            </v-list-item>
            <v-divider v-if="index < getComments.length - 1"
                       :key="`comment-divider-key${index}`"></v-divider>
          </template>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    value: '',
    commentId: null,
  }),
  computed: {
    ...mapGetters([
      'getPostUpdate',
      'getPostUpdateContent',
      'getComments',
      'isAuthenticated',
      'getCommentUpdate',
      'getCommentUpdateContent',
    ]),
    dialog: {
      get() {
        return this.$store.state.commentDialog;
      },
      set(v) {
        this.$store.commit('SET_COMMENT_DIALOG', v);
      },
    },
  },
  methods: {
    ...mapActions([
      'DELETE_COMMENT',
      'EDIT_COMMENT',
    ]),
    postComment() {
      this.comment = '';
      this.$store.dispatch('POST_COMMENT', { content: this.value });
    },
    closeDialog() {
      this.$store.commit('SET_COMMENT_UPDATE', false);
      this.$store.commit('SET_COMMENT_UPDATE_CONTENT', null);
      this.$store.commit('SET_COMMENT_DIALOG', false);
    },
    updateComment() {
      this.$store.dispatch('UPDATE_COMMENT', { content: this.value, id: this.commentId });
    },
  },
  mounted() {
    console.log('comment');
  },
  watch: {
    getCommentUpdateContent: {
      handler(val) {
        if (val) {
          this.value = val.comment.content;
          this.commentId = val.comment.id;
        }
      },
      deep: true,
    },
  },
};
</script>
