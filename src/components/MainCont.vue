<template>
  <div>
    
    <section class="section-1" id="section-1">
      
    </section>
  </div>
</template>

<script>

export default {
  name: 'MainCont',

  data: () => ({

  }),


}
</script>


<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;

  /* GAMA DE COLORES PASTEL*/

  --one: #be8519;
  --two: #000;
  --three: #1f5962;
  --four: #fff;


}



section {
  height: 90dvh;
  width: 100dvw;
  background-color: #fff;
  display: grid;
  place-content: center;
  z-index: 1;
}

.section-1{
  background-image: url(../assets/background-svg.svg);
  background-size: cover;
  background-position: fixed;
}




</style>
