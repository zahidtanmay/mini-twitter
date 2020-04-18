<template>

  <v-col cols="12" sm="8" order="1" order-sm="1" v-if="getPosts">

    <template v-for="(post, i) in getPosts" >

      <v-card class="mb-5" :key="`post-key-${i}`" elevation="0" outlined>

        <div max-height="800" max-width="800" class="mx-auto pa-3">

          <v-row>

            <v-col offset="1" cols="10" offset-sm="0" sm="3" class="center">

              <v-avatar size="110">
                <v-img class="card-img" src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/56819132_2694536447247241_212789928432500736_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeHlKXoeJuwLCWdKE90HOJ3OKizCyK4AqWAqLMLIrgCpYBv0uzptwNps32JoIz7pyYvgc_vcGHfiH2DWW1RwPyfe&_nc_ohc=ZPlQUbi3h9sAX8keXCH&_nc_ht=scontent.fdac31-1.fna&oh=0068f30e325443a8268932eb6a25f54a&oe=5EC014B3"></v-img>
              </v-avatar>
            </v-col>

            <v-col cols="12" sm="8">

              <v-row>

                <v-col cols="12">
                  <h2 class="title cyan--text hover">{{post.user.first_name}}</h2>
                  <p class="font-weight-light grey--text text--darken-1 body-2">
                    {{post.created_at}}
                  </p>
                </v-col>

                <v-col class="text-left" cols="12">
                  <div class="font-weight-regular">
                    {{post.content}}
                  </div>
                </v-col>

                <v-col cols="12" md="8" class="relative">

                  <v-card-actions>

                    <v-btn text small color="#2c003e">
                      <v-icon left color="red">mdi-heart</v-icon>
                      2 Likes
                    </v-btn>

                    <!--<AppCommentsModal :data="scream"></AppCommentsModal>-->

                  </v-card-actions>

                </v-col>

                <div class="center ml-5 pa-0">
                  <!--<AppDeleteScream v-show="userCredentials.handle === scream.userHandle"
                   :scream="scream"></AppDeleteScream>-->
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
