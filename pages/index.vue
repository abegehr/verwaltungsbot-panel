<template>
  <section class="section">
    <div class="columns is-mobile">
      <Login v-if="!$auth.loggedIn" />
    </div>
  </section>
</template>

<script>
import Login from "~/components/Login";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //DEBUG

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    Login
  }
};
</script>
