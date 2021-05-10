<template lang="pug">
  div
    nav.navbar.is-fixed-top.is-link
      .navbar-brand
        NuxtLink.navbar-item.is-capitalized(to="/")
          | Demo Web
        a.navbar-burger(
          role="button"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleMenu"
          )
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      .navbar-menu(
        :class="{ 'is-active': menuActive }"
        )
        .navbar-end
          NuxtLink.navbar-item(to="/converter")
            | Converter
          NuxtLink.navbar-item(to="/charts")
            | Charts
    div
      Nuxt
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};

</script>
