<template>

  <v-col cols="12" sm="4" order="-1" order-sm="2" >

    <v-card min-height="300" min-width="150" elevation="0"
            outlined v-if="isAuthenticated">

      <v-row class="pa-3" v-if="getUser">

        <v-col offset="1" cols="10" class="text-center relative">
          <v-avatar color="indigo" size="80">
            <span class="white--text headline">J</span>
          </v-avatar>

          <v-btn fab color="cyan accent-2"
            bottom left absolute @click="SET_POST_DIALOG(true)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-col>

        <v-col offset="1" cols="10" class="background">
          <v-row>
            <v-col>

              <div class="text-center mb-3 title text-secundario font-weight-bold">
                {{getUser.first_name}} {{getUser.last_name}}
              </div>

              <div class="text-center mb-3">
                <v-icon>mdi-web</v-icon>
                <span>
                  <a target="_blank">&nbsp;{{getUser.email}}</a>
                </span>
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
            <v-btn color="primary" dark x-large to="/signup">Sign Up</v-btn>
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

    <post-dialog/>

  </v-col>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import PostDialog from '@/components/PostDialog.vue';

export default {
  components: {
    PostDialog,
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'getUser',
    ]),
  },
  methods: {
    ...mapMutations([
      'SET_POST_DIALOG',
    ]),
  },
};
</script>
