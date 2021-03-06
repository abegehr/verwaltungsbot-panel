module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",

    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  /*
   ** Axios
   */
  axios: {
    baseURL: "https://www.codeontheroad.io" //DEBUG
  },
  /*
   ** Auth
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/local",
            method: "post",
            propertyName: "jwt"
          },
          logout: false,
          user: false
        },
        tokenRequired: true,
        tokenType: "bearer",
        autoFetchUser: false
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
