<template>
  <v-dialog v-model="dialog" persistent scrollable max-width="600px">
    <v-card>
      <v-card-text v-if="getUserList">
        <v-subheader v-text="`${getUserList.length} ${getUserListHeader}`"></v-subheader>
        <v-list two-line v-if="getUserList">

          <template v-for="(user, index) in getUserList">
            <v-list-item :key="`comment-list-key-${index}`">
              <v-list-item-avatar color="indigo">
                <span class="white--text headline">
                  {{user.first_name | avatar}}</span>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="user.first_name"></v-list-item-title>
                <!--<v-list-item-subtitle v-html="comment.content"></v-list-item-subtitle>-->
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="index < getUserList.length - 1"
                       :key="`user-divider-key${index}`"></v-divider>
          </template>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    value: '',
  }),
  computed: {
    ...mapGetters([
      'getUserList',
      'getUserListHeader',
    ]),
    dialog: {
      get() {
        return this.$store.state.listDialog;
      },
      set(v) {
        this.$store.commit('SET_LIST_DIALOG', v);
      },
    },
  },
};
</script>
