<template lang="pug">
  #app
      b-navbar(toggleable='lg' type="dark")
          b-navbar-brand.pl-4.pt-2.pb-2(href='kkmibts')
            img(src='@/assets/maf.png')
            | Mafda
          b-navbar-toggle(target='nav-collapse')
          b-collapse#nav-collapse(is-nav='')
            b-navbar-nav.ml-auto.pt-2.pr-4.pb-2
              b-nav-item(href='/') Home
              b-nav-item(href='/Profil') Profil
              b-nav-item(href='/Siswa') Kesiswaan
              b-nav-item(href='/Informasi') Informasi
      router-view
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  position: sticky;
  background-color: #0d0c0e;
}
nav a {
  color: azure;
}
img {
  padding-right: 10px;
}
</style>
