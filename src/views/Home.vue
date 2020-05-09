<template lang="pug">
div
  .home
    div
      b-jumbotron.text-light(header='Selamat Datang' lead='MI Mafatihul Huda Bantarsari')
        p.text-light Madrasah Hebat Bermartabat
        b-button.m-3(variant='dark' href='#') Masuk
        b-button.m-3(variant='warning' href='#') Daftar
      latest
      grid1
      grid2
      grid3
      grid4
      grid5
      grid6
      grid7

</template>

<script>
import latest from '@/components/latest.vue'
import grid1 from '@/components/grid1.vue'
import grid2 from '@/components/grid2.vue'
import grid3 from '@/components/grid3.vue'
import grid4 from '@/components/grid4.vue'
import grid5 from '@/components/grid5.vue'
import grid6 from '@/components/grid6.vue'
import grid7 from '@/components/grid7.vue'

export default {
  name : 'Home',
  components: {
    latest, grid1, grid2, grid3, grid4, grid5, grid6, grid7
  }
}

</script>

<style scoped>
.home {
  background-color: rgb(80,161,79);
}
.jumbotron {
  background-color: transparent;
  
}
.b-button {
  padding: 6px;
}
.jumbotron .lead {
  font-size: 25px;
  font-weight: bold;
}
img {
  padding-right: 8px;
}
</style>
