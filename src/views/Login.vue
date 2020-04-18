<template>
  <v-container class="gray">
    <v-row justify="center">
      <v-col cols="11" sm="6" md="4">
        <AppPanel name="Login">
          <AppLoginForm></AppLoginForm>
        </AppPanel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppPanel from '@/components/AppPanel.vue';
import AppLoginForm from '@/components/Form/AppLoginForm.vue';

export default {
  components: {
    AppPanel,
    AppLoginForm,
  },
};
</script>
