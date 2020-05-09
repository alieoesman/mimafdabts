<template lang="pug">
  <div class="kesiswaan">
      <div class="navlist mt-2 mb-2">
        <b-button v-b-toggle.collapse-1 class="m-1" href="/Siswa/data">Data Siswa</b-button>
        <b-button v-b-toggle.collapse-2 class="m-1" href="/Siswa/prestasi">Prestasi</b-button>
        <b-button v-b-toggle.collapse-3 class="m-1" href="/Siswa/karya">Karya Siswa</b-button>
        <b-button v-b-toggle.collapse-4 class="m-1" href="/Siswa/galleri">Galleri</b-button>
      </div> <hr>
      <div>
       
          <router-view name='kesiswaan'/>
          
      </div>
     
  </div>
</template>
<script>
import data from '@/components/Siswa/data.vue'
import prestasi from '@/components/Siswa/prestasi.vue'
import karya from '@/components/Siswa/karya.vue'
import galleri from '@/components/Siswa/galleri.vue'


export default {
  name : 'Kesiswaan',
  components: {
    data, prestasi, karya, galleri
  }
}
</script>

<style scoped>



</style>
