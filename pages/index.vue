<template>
  <section class="section">
    <Login v-if="!$auth.loggedIn" />
  </section>
</template>

<script>
import Login from "~/components/Login";

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
