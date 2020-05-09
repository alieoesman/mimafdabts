<template lang="pug">
        b-container.bv-example-row
            b-row.justify-content-sm-center.pt-3.pb-3.m-4
                b-col.border-right
                    grid1a(:gambar="require('@/assets/topi.svg')" isi='aku pasti bisa')
                b-col.border-right
                    grid1a(:gambar="require('@/assets/kelas.svg')" isi='lorem jsvhsaj ksfjvhbjdfv fuvhskdfiuvh d')
                b-col.border-right
                    grid1a(:gambar="require('@/assets/globe.svg')" isi='kufvzjdf vdfgvufdgv zdfgvkudyfgv zdfygdku')
                b-col
                    grid1a(:gambar="require('@/assets/wats.svg')" isi='semangat terus pantang menyerah')
</template>

<script>
import grid1a from '@/components/grid1a.vue'
   
export default {
  name : 'grid1',
  components: {
    grid1a
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
