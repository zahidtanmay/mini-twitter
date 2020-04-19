<template>
  <form @submit.prevent="loginHandlerSubmit" ref="form">
    <v-text-field
      v-model="formNewUser.first_name"
      :rules="handleRules"
      label="First Name"
      required
      :loading="getSignUpLoading"
      color="cyan"
    ></v-text-field>
    <v-text-field
      v-model="formNewUser.last_name"
      :rules="handleRules"
      label="Last Name"
      required
      :loading="getSignUpLoading"
      color="cyan"
    ></v-text-field>
    <v-text-field
      v-model="formNewUser.email"
      :rules="emailRules"
      label="E-mail"
      required
      :loading="getSignUpLoading"
      color="cyan"
    ></v-text-field>
    <v-text-field
      v-model="formNewUser.password"
      :append-icon="showPassword ? svg.visibility : svg.visibilityOff"
      :type="showPassword ? 'text' : 'password'"
      name="password"
      label="Password"
      hint="At least 6 characters"
      counter
      :loading="getSignUpLoading"
      @click:append="showPassword = !showPassword"
      color="cyan"
    ></v-text-field>

    <div v-if="getSignUpError" class="subtitle1 text-center text-capitalize red--text">
      <p v-for="(errorMessage, i) in getSignUpError" :key="i">{{errorMessage[0]}}</p>
      <span>Already have an account?
              <router-link class="cyan--text" to="/login">Sign In Here</router-link>
            </span>
    </div>

    <div class="mt-5">
      <v-btn type="submit" :loading="getSignUpLoading" class="mr-4"
             color="#32BCC3" elevation="0" dark>
        Sign Up
      </v-btn>
      <v-btn @click="reset" :disabled="getSignUpLoading" color="#32BCC3" elevation="0" dark>
        Clear
      </v-btn>
    </div>
  </form>
</template>

<script>
import { reset } from '@/mixins/mixins';
import { mapGetters } from 'vuex';

export default {
  mixins: [reset],
  data: () => ({
    showPassword: false,
    formNewUser: {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    },
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    handleRules: [
      (v) => !!v || 'Name is required',
    ],
    svg: {
      visibility: 'mdi-eye-outline',
      visibilityOff: 'mdi-eye-off-outline',
    },
  }),
  methods: {
    loginHandlerSubmit() {
      this.$store.dispatch('SIGN_UP', this.formNewUser);
    },
  },
  computed: {
    ...mapGetters(['getSignUpError', 'getSignUpLoading']),
  },
  beforeDestroy() {
    // this.$store.dispatch('CLEAR_ERROR');
  },
};
</script>
