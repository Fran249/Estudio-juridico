<template>
  <section class="section-1" id="section-1">
    <v-img src="../assets/logo.png"></v-img>
  </section>
  <section class="section-2" id="section-2">
    <h3>Section 2</h3>
  </section>
  <section class="section-3" id="section-3">
    <h3>Section 3</h3>
  </section>
  <section class="section-4" id="section-4">
    <h3>Section 4</h3>
  </section>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    
  })
}
</script>


<style lang="css" scoped>

*{
    margin: 0;
    padding: 0;

    /* GAMA DE COLORES PASTEL*/

    --one: #be8519;
    --two: #000;
    --three: #1f5962;
    --four: #fff;

}



section {
  height: 100dvh;
  width: 100dvw;
  background-color: #fff;
}






</style>
