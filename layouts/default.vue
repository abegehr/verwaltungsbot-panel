<template>
  <div>
    <b-navbar class="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h2>#WirVsVirus Verwaltungsbot Panel</h2>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button v-if="$auth.loggedIn" @click="userLogout">
              Logout
            </b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

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
