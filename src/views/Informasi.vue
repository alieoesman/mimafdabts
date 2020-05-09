<template lang="pug">
  <div class="informasi">
      <div class="navlist mt-2 mb-2">
        <b-button v-b-toggle.collapse-1 class="m-1" href="/Informasi/pendaftaran">Pendaftaran Siswa Baru</b-button>
        <b-button v-b-toggle.collapse-2 class="m-1" href="/Informasi/berita">Berita</b-button>
        <b-button v-b-toggle.collapse-3 class="m-1" href="/Informasi/kaldik">Kaldik</b-button>
        <b-button v-b-toggle.collapse-4 class="m-1" href="/Informasi/extra">Extra Kurikuler</b-button>
      </div> <hr>
      <div>
       
          <router-view name='informasi'/>
          
      </div>
     
  </div>
</template>
<script>
import pendaftaran from '@/components/Informasi/pendaftaran.vue'
import berita from '@/components/Informasi/berita.vue'
import kaldik from '@/components/Informasi/kaldik.vue'
import extra from '@/components/Informasi/extra.vue'


export default {
  name : 'informasi',
  components: {
    pendaftaran, berita, kaldik, extra
  }
}
</script>

<style scoped>



</style>
