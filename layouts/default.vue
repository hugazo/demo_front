<template lang="pug">
  div
    nav.navbar.is-fixed-top.is-link
      .navbar-brand
        a.navbar-item.is-capitalized
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
