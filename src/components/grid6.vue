<template lang="pug">
    div.bg-secondary.p-2
        b-container.bv-example-row
            b-row.justify-content-center.p-2.m-4
                b-col.p-2.border-right
                    img(src='@/assets/topi.svg')
                    h4
                        | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse atque et unde magnam quasi ipsam.
                    b-button(href='#' variant='dark') Lanjut..
                b-col.p-2.border-right
                    img(src='@/assets/kelas.svg')
                    h4
                        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos consequatur officiis optio tempora illo. Sit.
                    b-button(href='#' variant='dark') Lanjut..
                b-col.p-2
                    img(src='@/assets/globe.svg')
                    h4
                        | Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium adipisci itaque molestias est saepe?
                    b-button(href='#' variant='dark') Lanjut..
            hr
            b-row.justify-content-center.p-2.m-4
                b-col.p-2.border-right
                    img(src='@/assets/topi.svg')
                    h4
                        | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse atque et unde magnam quasi ipsam.
                    b-button(href='#' variant='dark') Lanjut..
                b-col.p-2.border-right
                    img(src='@/assets/kelas.svg')
                    h4
                        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos consequatur officiis optio tempora illo. Sit.
                    b-button(href='#' variant='dark') Lanjut..
                b-col.p-2
                    img(src='@/assets/globe.svg')
                    h4
                        | Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium adipisci itaque molestias est saepe?
                    b-button(href='#' variant='dark') Lanjut.    
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    padding-bottom: 6px;
    width: 40px;
    padding-top: 10px;
}
h4 {
    font-size: 16px;
    padding: 4px;
    color: white;
}
hr {
    width: 95%;
    height: 1px;
    background-color: rgba(112, 108, 108, 0.521);
}
.border-right {
    border-color: rgba(112, 108, 108, 0.521) !important;
}
</style>
