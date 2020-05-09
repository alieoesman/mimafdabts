<template lang="pug">
    .grid
        .col
            hr
        h4.col(style='text-align:center;margin:0;padding:0')
            | Mengapa harus MI Mafda,  
            a(href='https://crates.io/crates/rocket/0.4.4') pelajari lebih lanjut
        .col
            hr
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.grid {
    position: relative;
    z-index: 10;
    display: flex;
}
.col {
    position: relative;
    z-index: 10;
    box-sizing: border-box;
}
hr {
    box-sizing: content-box;
    overflow: visible;
    border: 0;
    height: 1px;
    background-color: white;
}
h4 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    color: white;
}
a {
    color: white;
}
</style>
