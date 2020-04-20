<template>

  <v-col cols="12" sm="4" order="-1" order-sm="2" >

    <v-card min-height="300" min-width="150" elevation="0"
            outlined>

      <v-row class="pa-3" v-if="getProfileUser">

        <v-col offset="1" cols="10" class="text-center relative">
          <v-avatar color="indigo" size="80">
            <span class="white--text headline">{{getProfileUser.first_name | avatar}}</span>
          </v-avatar>

          <v-row>

            <v-col offset="1" cols="10" class="text-center relative"
                   v-if="isAuthenticated && !ownProfile">
              <div class="text-center">
                <v-btn color="primary" dark outlined
                       @click="FOLLOW_USER" v-if="!follow">Follow</v-btn>
                <v-btn color="primary" dark outlined
                       @click="UNFOLLOW_USER" v-else>Unfollow</v-btn>
              </div>
            </v-col>

          </v-row>

        </v-col>

        <v-col offset="1" cols="10" class="background">
          <v-row>
            <v-col>

              <div class="text-center mb-3 title text-secundario font-weight-bold">
                {{getProfileUser.first_name}} {{getProfileUser.last_name}}
              </div>

              <div class="text-center mb-3">
                <v-icon>mdi-web</v-icon>
                <span>
                  <a target="_blank">&nbsp;{{getProfileUser.email}}</a>
                </span>
              </div>

            </v-col>

          </v-row>

          <v-row>
            <v-col offset="1" cols="10" class="text-center relative">
              <div class="text-center">
                <v-btn color="primary" dark x-large
                       @click="SHOW_USER_LIST({ type: 'followers' })">
                  Followers {{getFollowers.length}}
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col offset="1" cols="10" class="text-center relative py-0">
              <div class="text-center">
                <v-btn color="success" x-large
                       @click="SHOW_USER_LIST({ type: 'following' })">
                  Following {{getFollowees.length}}
                </v-btn>
              </div>
            </v-col>
          </v-row>

        </v-col>

      </v-row>

    </v-card>

    <people-list/>

  </v-col>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PeopleList from '@/components/PeopleList.vue';

export default {
  components: {
    PeopleList,
  },
  computed: {
    /* eslint-disable */
    follow: function() {
      const user = this.getUser.id;
      let x = this.getFollowers.filter((follower) => {
        console.log(follower.id, follower.id === user, user);
        return follower.id === user;
      });
      return x.length > 0;
    },
    ownProfile: function () {
      const profileUser = this.$route.params.name;
      const user = this.getUser.id;
      return profileUser === user;
    },
    pivot: function () {
      const user = this.getUser.id;
      let x = this.getFollowers.filter((follower) => {
        console.log(follower.id, follower.id === user, user);
        return follower.id === user;
      });
      console.log(x);
    },
    /* eslint-disable */
    ...mapGetters([
      'isAuthenticated',
      'getProfileUser',
      'getFollowers',
      'getFollowees',
      'getUser',
    ]),
  },
  methods: {
    ...mapActions([
      'SHOW_USER_LIST',
      'FOLLOW_USER',
      'UNFOLLOW_USER',
    ]),
  },
};
</script>
