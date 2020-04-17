<template>
  <v-container fluid pa-3 style="min-height: 100vh;">
    <v-row>

      <v-col cols="12" sm="8" order="1" order-sm="1">

        <v-card class="mb-5" v-for="i in 5" :key="i" elevation="0">

          <div max-height="800" max-width="800" class="mx-auto pa-3">

            <v-row>

              <v-col offset="1" cols="10" offset-sm="0" sm="3" class="center">

                <v-avatar size="110">
                  <v-img class="card-img" src="scream.userImage"></v-img>
                </v-avatar>
              </v-col>

              <v-col cols="12" sm="8">

                <v-row>

                  <v-col cols="12">
                    <h2 class="title cyan--text hover">Jahid</h2>
                    <p class="font-weight-light grey--text text--darken-1 body-2">
                      scream.createdAt | day
                    </p>
                  </v-col>

                  <v-col class="text-left" cols="12">
                    <div class="font-weight-regular text-truncate">
                      scream.body
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

      </v-col>

      <!--<v-col cols="12" sm="8" order="1">-->
        <!--<v-card v-for="n in 5" :key="n" class="mb-5" elevation="0">-->
          <!--<AppScreamContentLoader></AppScreamContentLoader>-->
        <!--</v-card>-->
      <!--</v-col>-->

      <v-col cols="12" sm="4" order="-1" order-sm="2" >
        <v-card min-height="300" min-width="150" elevation="0" >
          <v-row class="pa-3">
            <v-col offset="1" cols="10" class="center relative">
              <v-avatar size="200">
                <v-img class="card-img" src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/56819132_2694536447247241_212789928432500736_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeHlKXoeJuwLCWdKE90HOJ3OKizCyK4AqWAqLMLIrgCpYBv0uzptwNps32JoIz7pyYvgc_vcGHfiH2DWW1RwPyfe&_nc_ohc=ZPlQUbi3h9sAX8keXCH&_nc_ht=scontent.fdac31-1.fna&oh=0068f30e325443a8268932eb6a25f54a&oe=5EC014B3"></v-img>
              </v-avatar>

              <!------------------ EDIT IMAGE BUTTON ------------------>
              <div v-if="isAuthenticated && userCredentials.handle === data.handle">
                <input type="file" id="imageInput" hidden @change="handleImageChange">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn class="mx-2" fab small color="#32BCC3"
                           absolute right bottom v-on="on" dark>
                      <v-icon dark>mdi-camera</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit Profile Image</span>
                </v-tooltip>
              </div>
              <!------------------ EDIT IMAGE BUTTON ------------------>
            </v-col>
            <v-col offset="1" cols="10" class="background">
              <v-row>
                <v-col>
                  <!------------------ PROFILE DATA ------------------>
                  <div class="text-center mb-3 title text-secundario font-weight-bold">
                    <span>@</span>jahid
                  </div>
                  <div class="text-center mb-3 pr-5 pl-5 font-weight-regular">
                    bio
                  </div>
                  <div class="text-center mb-3">
                    <v-icon>mdi-location</v-icon>
                    <span>
                      location
                    </span>
                  </div>
                  <div class="text-center mb-3">
                    <v-icon>web</v-icon>
                    <span>
                      <a target="_blank">&nbsp;data.website</a>
                    </span>
                  </div>
                  <div class="text-center">
                    <v-icon>mdi-calendar</v-icon>
                    <span>
                                    data.createdAt | day
                                </span>
                  </div>
                  <!------------------ END PROFILE DATA ------------------>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  created() {
    window.scrollTo(0, 0);
  },
  computed: {
  },
};
</script>
