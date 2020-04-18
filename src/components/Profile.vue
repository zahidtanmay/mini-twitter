<template>

  <v-col cols="12" sm="4" order="-1" order-sm="2" >

    <v-card min-height="300" min-width="150" elevation="0"
            outlined v-if="isAuthenticated">

      <v-row class="pa-3" v-if="getUser">

        <v-col offset="1" cols="10" class="text-center relative">
          <v-avatar size="120">
            <v-avatar color="indigo" size="80">
              <span class="white--text headline">J</span>
            </v-avatar>
          </v-avatar>
        </v-col>

        <v-col offset="1" cols="10" class="background">
          <v-row>
            <v-col>
              <div class="text-center mb-3 title text-secundario font-weight-bold">
                <span>@</span>{{getUser.first_name}}
              </div>
              <div class="text-center mb-3 pr-5 pl-5 font-weight-regular">
                bio
              </div>
              <div class="text-center mb-3">
                <v-icon>mdi-map-marker</v-icon>
                <span>location</span>
              </div>
              <div class="text-center mb-3">
                <v-icon>mdi-web</v-icon>
                <span>
                      <a target="_blank">{{getUser.email}}</a>
                    </span>
              </div>
              <div class="text-center">
                <v-icon>mdi-calendar</v-icon>
                <span>data.createdAt | day</span>
              </div>

            </v-col>
          </v-row>

          <v-row>
            <v-col offset="1" cols="10" class="text-center relative py-0">
              <div class="text-center">
                <v-btn color="success" @click="LOGOUT" small>Log Out</v-btn>
              </div>
            </v-col>
          </v-row>

        </v-col>

      </v-row>

    </v-card>

    <v-card min-height="300" min-width="150" elevation="0" outlined v-else>

      <v-row>
        <v-col offset="1" cols="10" class="text-center relative mt-12">
          <div class="text-center">
            <v-btn color="primary" dark x-large>Sign Up</v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col offset="1" cols="10" class="text-center relative py-0">
          <div class="text-center">
            <v-btn color="success" x-large to="/login">Log In</v-btn>
          </div>
        </v-col>
      </v-row>

    </v-card>

  </v-col>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'getUser',
    ]),
  },
  methods: {
    ...mapActions([
      'LOGOUT',
    ]),
  },
};
</script>
