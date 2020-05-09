<template lang="pug">
  <div class="profil">
      <div class="navlist">
        <b-button v-b-toggle.collapse-1 class="m-1" href="visi">Visi & Misi</b-button>
        <b-button v-b-toggle.collapse-2 class="m-1" href="komite">Komite</b-button>
        <b-button v-b-toggle.collapse-3 class="m-1" href="agenda">Agenda Sekolah</b-button>
        <b-button v-b-toggle.collapse-4 class="m-1" href="program">Program Kerja</b-button>
        <b-button v-b-toggle.collapse-5 class="m-1" href="sarpras">Sarana dan Prasarana</b-button>
        <b-button v-b-toggle.collapse-6 class="m-1" href="guru">Dewan Guru & Karyawan</b-button>
      </div>
      <div>
       
          <router-view name='profil'/>
          
      </div>
     
  </div>
</template>
<script>
import visi from '@/components/Profil/visi.vue'
import sarpras from '@/components/Profil/sarpras.vue'
import agenda from '@/components/Profil/agenda.vue'
import program from '@/components/Profil/program.vue'
import guru from '@/components/Profil/guru.vue'
import komite from '@/components/Profil/komite.vue'

export default {
  name : 'profil',
  components: {
    visi, sarpras, agenda, komite, program, guru
  }
}
</script>

<style scoped>

</style>
