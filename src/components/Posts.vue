<template>

  <v-col cols="12" sm="8" order="1" order-sm="1">

    <template v-if="isAuthenticated">

      <tabs/>

      <keep-alive>
        <component :is="getFeedComponent"></component>
      </keep-alive>

    </template>

    <template v-else>
      <latest-feed/>
    </template>

    <comment-dialog v-if="getCommentDialog"/>

  </v-col>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CommentDialog from '@/components/CommentDialog.vue';
import Tabs from '@/components/Tabs.vue';
import LatestFeed from '@/components/LatestFeed.vue';
import TrendingFeed from '@/components/TrendingFeed.vue';

export default {
  components: {
    CommentDialog,
    Tabs,
    LatestFeed,
    TrendingFeed,
  },
  computed: {
    ...mapGetters([
      'getPosts',
      'getFeedComponent',
      'isAuthenticated',
      'getCommentDialog',
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
