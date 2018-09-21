<template>
  <v-container fluid class="login-card">
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap align-center>
        <v-flex class="text-xs-center"  xs12 sm8 offset-sm2 md4 offset-md4>
          <h1 class="display-1 font-weight-light text-center" color="cyan lighten-3">Log in to Vue-PWA</h1>
          <!-- <p>You can login without a password into this app.</p> -->
          <p>An email will be sent to your email id for verification.</p>
          <v-card class="login-card">
            <v-card-title class="headline">Sign Up or Login</v-card-title>
            <v-card-text>
              <v-text-field
                label="Enter your email"
                v-model="email"
              >
              </v-text-field>
            </v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn block color="primary">Login via Email</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { passwordlessLogin } from '@/services/auth'
export default {
  name: 'home',
  data: () => ({
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  created () {
    console.log(passwordlessLogin('akashkaushik33@gmail.com'))
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login-card {
  border-radius: 10px;
  margin-top: 10vh
}
</style>
