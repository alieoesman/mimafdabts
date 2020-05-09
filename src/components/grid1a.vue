<template lang="pug">
    div.p-4
        img(:src='gambar')
        h4 {{ isi }}
        b-button(href='#' variant='dark') Lanjut..             
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    props: [ 'isi', 'gambar']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
    padding-bottom: 6px;
    width: 50px;
    padding-top: 10px;
}
h4 {
    font-size: 16px;
    padding: 4px;
}
</style>
