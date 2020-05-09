<template>
  <div class="data">
      <div class="arrow-up"></div>
      <h4>Data Siswa MI Mafatihul Huda</h4>
      <div class="arrow-down"></div>
      
      <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab title="Kelas I"><b-card-text><kelas1></kelas1></b-card-text></b-tab>
              <b-tab title="Kelas II"><b-card-text><kelas2></kelas2></b-card-text></b-tab>
              <b-tab title="Kelas III"><b-card-text><kelas3></kelas3></b-card-text></b-tab>
              <b-tab title="Kelas IV"><b-card-text><kelas4></kelas4></b-card-text></b-tab>
              <b-tab title="Kelas V"><b-card-text><kelas5></kelas5></b-card-text></b-tab>
              <b-tab title="Kelas VI"><b-card-text><kelas6></kelas6></b-card-text></b-tab>
            </b-tabs>
          </b-card>
      </div>
  </div>
</template>
<script>
import kelas1 from '@/components/Siswa/kelas1.vue'
import kelas2 from '@/components/Siswa/kelas2.vue'
import kelas3 from '@/components/Siswa/kelas3.vue'
import kelas4 from '@/components/Siswa/kelas4.vue'
import kelas5 from '@/components/Siswa/kelas5.vue'
import kelas6 from '@/components/Siswa/kelas6.vue'

export default {
  name: 'data',
  components: {
    kelas1, kelas2, kelas3, kelas4, kelas5, kelas6
  }
}
</script>

<style scoped>

h4 {
  font-weight: bold;
  margin-top: -45px;
  z-index: 10;
  position: sticky;
}
.arrow-up {
  margin: auto;
	width: 100%; 
	height: 60px; 
	border-left: 0px solid transparent;
	border-right: 0px solid transparent;
	background-color: rgb(175, 224, 60);
  visibility: visible;
  position: sticky;

}
.arrow-down {
  margin: auto;
  margin-top: 10px;
  padding-bottom: 10px;
	width: 0; 
	height: 0; 
	border-left: 100px solid transparent;
	border-right: 100px solid transparent;
	border-top: 40px solid rgb(175, 224, 60);
 }
</style>
