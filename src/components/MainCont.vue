<template>
  <div>
    
    <section class="section-1" id="section-1">
      
      <Footer/>
    </section>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'MainCont',
  components :{
    Footer,
  },
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
  height: 100dvh;
  width: 100dvw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.section-1{
  
  background-image: url(../assets/background-svg.svg);
  background-size: cover;
  background-position: 50%;
}

@media screen and (max-width: 960px) {
    .section-1{
      background-image: url(../assets/mobile-svg.svg);
    background-size: cover;
    background-position: center;
    }
}


</style>
