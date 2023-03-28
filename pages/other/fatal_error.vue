<template>
  <v-layout
    align-center
    justify-center
    class="white--text ma-5 pa-5 metamask-info-template"
  >
    <v-flex xs12 sm8 md6 class="metamask-info-template__row">
      <v-card
        color="red"
        elevation="0"
        class="metamask-info-template__card pa-5"
      >
        <v-card-title class="white--text quick-font-fix-for-mobile"
          >Error</v-card-title
        >
        <v-card-text class="body-1 white--text">
          <br />
          <br />
          Unfortunately we can't process your request right now.<br />
          Please try again later
        </v-card-text>

        <v-card-text>
          <v-btn color="black" class="white--text" href="/" large
            >BACK TO HOME PAGE</v-btn
          >
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  auth: false,
  data: () => ({
    variable: null,
  }),
  mounted() {},
}
</script>

<style>
.v-card__title.quick-font-fix-for-mobile {
  font-size: 2em;
}
</style>
