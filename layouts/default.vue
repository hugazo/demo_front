<template lang="pug">
  div
    nav.navbar.is-fixed-top.is-link
      .navbar-brand
        NuxtLink.navbar-item.is-capitalized(to="/")
          | Demo Web
      .navbar-menu
        .navbar-end
          NuxtLink.navbar-item(to="/converter")
            | Converter
          NuxtLink.navbar-item(to="/charts")
            | Charts
    div
      Nuxt
</template>
