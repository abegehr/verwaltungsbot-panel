<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Login to #WirVsVirus Verwaltungsbot Panel
    </h2>
    <b-field label="Email">
      <b-input
        type="email"
        value=""
        maxlength="64"
        v-model="login.identifier"
      />
    </b-field>
    <b-field label="Password">
      <b-input
        value="123"
        type="password"
        maxlength="64"
        v-model="login.password"
      />
    </b-field>
    <b-button @click="userLogin">Submit</b-button>
    <b-message
      v-if="error"
      title="Login Failed"
      type="is-danger"
      aria-close-label="Close message"
    >
      Login failed. Please try again or contact support to reset your login.
      Error: {{ this.error }}
    </b-message>
  </section>
</template>

<script>
export default {
  data() {
    return {
      login: {
        identifier: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    async userLogin() {
      try {
        console.log("login – sent: ", this.login);
        let res = await this.$auth.loginWith("local", {
          data: this.login
        });
        console.log("login – res: ", res);
        if (res.status === 200) {
          console.log("login – logged in successfully.");
          window.location.reload(true);
        }
      } catch (err) {
        console.log("login – err: ", err);
        this.error = "Could not login: " + err;
      }
    }
  }
};
</script>
