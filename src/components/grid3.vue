<template lang="pug">
   .grid
        b-container.bv-example-row
            b-row
                b-col
                    h2 Hello, Kawan!
                    hr
                    p
                        | Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto possimus accusantium illo? Doloremque, corporis.
                    br
                    p
                        | Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates delectus atque quibusdam repudiandae facilis sapiente labore consectetur laborum! Ut.
                b-col
                    div
                    img(src='@/assets/10.jpeg')
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.grid {
    background-color: rgb(80,161,79);
}
hr {
    border: 0;
    height: 1px;
    background-color: white;
}
.col {
    margin: 0px;
    padding: 25px;    
}
img {  
    width: 500px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: -20px;
}
h2 {
    color: white;
    text-align: left;
    padding-top: 50px;
}
p {
    color: white;
    text-align: left;
}
</style>
