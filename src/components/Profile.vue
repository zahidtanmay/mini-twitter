<template>
  <v-col cols="12" sm="4" order="-1" order-sm="2" >
    <v-card min-height="300" min-width="150" elevation="0" outlined>
      <v-row class="pa-3">
        <v-col offset="1" cols="10" class="center relative">
          <v-avatar size="200">
            <v-img class="card-img" src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/56819132_2694536447247241_212789928432500736_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeHlKXoeJuwLCWdKE90HOJ3OKizCyK4AqWAqLMLIrgCpYBv0uzptwNps32JoIz7pyYvgc_vcGHfiH2DWW1RwPyfe&_nc_ohc=ZPlQUbi3h9sAX8keXCH&_nc_ht=scontent.fdac31-1.fna&oh=0068f30e325443a8268932eb6a25f54a&oe=5EC014B3"></v-img>
          </v-avatar>

          <div>
            <input type="file" id="imageInput" hidden>
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

        </v-col>
        <v-col offset="1" cols="10" class="background">
          <v-row>
            <v-col>

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
                <span>data.createdAt | day</span>
              </div>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-col>

</template>
