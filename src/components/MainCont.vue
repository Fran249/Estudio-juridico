<template>
  <section class="section-1" id="section-1">
    <h3>Section 1</h3>
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

    --one: #688D99;
    --two: #E6CAD1;
    --three: #B3D9E6;
    --four: #EBE482;
    --five: #9E9B70;
}



section {
  height: 100dvh;
  width: 100dvw
}


.section-1 {
  background-color: var(--two);
}
.section-2{
  background-color: var(--three);
}

.section-3{
  background-color: var(--four);
}

.section-4{
  background-color: var(--five);
}



</style>
