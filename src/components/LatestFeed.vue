<template>

  <div v-if="getPosts">

    <template v-for="(post, i) in getPosts">

      <v-card class="mb-5" :key="`post-key-${i}`" elevation="0" outlined>

        <div max-height="800" max-width="800" class="mx-auto pa-0">

          <v-row>

            <v-col offset="1" cols="12" offset-sm="0" sm="2" class="text-center px-0">
              <a>
                <v-avatar color="indigo" size="80">
                  <span class="white--text headline">
                    {{post.user.first_name | avatar}}
                  </span>
                </v-avatar>
              </a>
            </v-col>

            <v-col cols="12" sm="8">

              <v-row>

                <v-col cols="10" class="pa-0">
                  <a class="title cyan--text hover"
                     @click="VISIT_PROFILE({ name: post.user.first_name, id: post.user.id })"
                  >{{post.user.first_name}}</a>
                  <p class="font-weight-light grey--text text--darken-1 body-2">
                    {{post.created_at | day}}
                  </p>
                </v-col>

                <template v-if="isAuthenticated && post.user.id === getUser.id">

                  <post-action :post="post" />

                </template>

                <v-col class="text-left pa-0" cols="12" >
                  <div class="font-weight-regular">
                    {{post.content}}
                  </div>
                </v-col>

                <v-col cols="12" md="8" class="relative pa-0" >

                  <v-card-actions>

                    <v-btn color="#2c003e" text small @click="SHOW_COMMENTS(post)">
                      <v-icon left>mdi-comment-multiple-outline</v-icon>
                      {{post.comments.length}} Comments
                    </v-btn>

                  </v-card-actions>

                </v-col>

                <div class="center ml-5 pa-0">

                </div>

              </v-row>

            </v-col>

          </v-row>

        </div>

      </v-card>

    </template>

  </div>

</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import PostAction from '@/components/PostAction.vue';

export default {
  components: {
    PostAction,
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'getPosts',
      'getUser',
    ]),
  },
  methods: {
    ...mapActions([
      'SHOW_COMMENTS',
      'VISIT_PROFILE',
    ]),
  },
  mounted() {
    this.$store.dispatch('FETCH_DATA', { type: 'POST_DATA' });
  },
};
</script>
