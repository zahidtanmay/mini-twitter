<template>

  <v-col cols="12" sm="8" order="1" order-sm="1" >

    <template v-if="getProfilePosts">
      <template v-for="(post, i) in getProfilePosts" >

        <v-card class="mb-5" :key="`post-key-${i}`" elevation="0" outlined>

          <div max-height="800" max-width="800" class="mx-auto pa-0">

            <v-row>

              <v-col offset="1" cols="12" offset-sm="0" sm="2" class="text-center px-0">
                <a>
                  <v-avatar color="indigo" size="80">
                    <span class="white--text headline">{{getProfileUser.first_name | avatar}}</span>
                  </v-avatar>
                </a>
              </v-col>

              <v-col cols="12" sm="8">

                <v-row>

                  <v-col cols="12" class="pa-0">
                    <p class="title cyan--text hover">{{getProfileUser.first_name}}</p>
                    <p class="font-weight-light grey--text text--darken-1 body-2">
                      {{post.created_at | day}}
                    </p>
                  </v-col>

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
    </template>

    <template v-if="getProfilePosts.length === 0">
      <v-card class="mb-5" elevation="0" outlined>
        <v-col cols="12" sm="8">

          <v-row>
            No Posts
          </v-row>
        </v-col>
      </v-card>
    </template>

    <comment-dialog/>

  </v-col>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CommentDialog from '@/components/CommentDialog.vue';

export default {
  components: {
    CommentDialog,
  },
  computed: {
    ...mapGetters([
      'getProfilePosts',
      'getProfileUser',
    ]),
  },
  methods: {
    ...mapActions([
      'SHOW_COMMENTS',
      'VISIT_PROFILE',
    ]),
  },
};
</script>

<style>
.post-card {border: thin solid rgba(0,0,0,.12);}
</style>
