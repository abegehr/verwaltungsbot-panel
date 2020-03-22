<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">#WirVsVirus Verwaltungsbot Panel</a>
        <b-button v-if="$auth.loggedIn" @click="userLogout">Logout</b-button>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" }
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" }
        }
      ]
    };
  },
  methods: {
    async userLogout() {
      try {
        console.log("logout – called");
        await this.$auth.logout();
        console.log("logout – done");
      } catch (err) {
        console.log("logout – err: ", err);
      }
    }
  }
};
</script>
