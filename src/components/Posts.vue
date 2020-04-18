<template>

  <v-col cols="12" sm="8" order="1" order-sm="1" v-if="getPosts">

    <template v-for="(post, i) in getPosts" >

      <v-card class="mb-5" :key="`post-key-${i}`" elevation="0" outlined>

        <div max-height="800" max-width="800" class="mx-auto pa-0">

          <v-row>

            <v-col offset="1" cols="12" offset-sm="0" sm="2" class="text-center px-0">
              <v-avatar color="indigo" size="80">
                <span class="white--text headline">{{post.user.first_name | avatar}}</span>
              </v-avatar>
            </v-col>

            <v-col cols="12" sm="8">

              <v-row>

                <v-col cols="12" class="pa-0">
                  <h2 class="title cyan--text hover">{{post.user.first_name}}</h2>
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

                    <v-btn color="#2c003e" text small>
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

  </v-col>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getPosts',
    ]),
  },
};
</script>

<style>
  .post-card {border: thin solid rgba(0,0,0,.12);}
</style>
