<template>
  <v-app>
    <v-app-bar
      class="app-nav"
      style="background-color: transparent"
      clipped-left
      app
      elevation="0"
    >
      <v-toolbar-title>
        <nuxt-link style="text-decoration: none" to="/">
          <img
            src="/images/logo.png"
            style="max-height: 100px; margin-top: 50px"
            alt="a logo"
          />
          <h1>mothvalley.xyz</h1>
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
    <img src="/images/cities.svg" alt="cities logo" class="logo-img" />
    <v-footer
      style="background-color: transparent"
      class="grey--text text-body-1 pa-3 justify-center"
      >Copyright 2023-Present Ⓒ mothvalley.xyz, version 0.01
    </v-footer>
  </v-app>
</template>
<script>
export default {
  auth: false,
  data() {
    return {}
  },
  mounted() {},
  methods: {
    goToUrl(url) {
      this.$router.push(url)
    },
    goToExternalUrl(url) {
      window.open(url, '_blank')
    },
  },
}
</script>