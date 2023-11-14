<template>
  <section>
    <div class="circular-div">
      <v-img class="circular-img" cover src="../assets/Diego.jpeg"></v-img>
    </div>

    <h3>Dr. Diego Martín Alvarez Sampaolesi</h3>
    <div class="d-flex flex-column align-center justify-center p-container" style="gap: 35px;">
      <p>Abogado titular del estudio.</p>

      <p>
        Abogado especialista en Derecho a la Salud, egresado de la Universidad de Buenos Aires en el 2009. Ha desarrollado
        una vasta experiencia prestando todo tipo de servicios legales relacionados con el Derecho a la Salud, ejerciendo
        labores en Capital Federal y el interior del país.
      </p>
      <p>
        Conformado por profesionales con gran expertise en la materia, el Estudio Sampaolesi brinda asesoramiento a sus
        clientes, de manera integral, para lograr una cobertura completa que atienda todas las necesidades de nuestros
        patrocinados.
      </p>
    </div>





    <Footer/>
  </section>
</template>

 <script>
  import Footer from '../components/Footer.vue'

export default {
  components: {
    Footer
  },
  data:()=>({
    
  })
  }

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;

  /* GAMA DE COLORES PASTEL*/

  --one: #be8519;
  --two: #000;
  --three: #1f5962;
  --four: #fff;
}

@font-face {
  font-family: 'Times New Roman';
  src: url('../assets/fonts/times.ttf');
}

section {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(../assets/quienes-somos-bckg.png);
  background-size: cover;
  gap: 20px;
}

.circular-div {
  width: 150px;
  height: 150px;
  border-radius: 50%;

}

.circular-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid var(--one);
}

 h3 {
  font-family: 'Times New Roman';
  color: var(--four);
  font-weight: 120;
  font-size: 18px;
}

.dr {
  color: var(--two);
}

p {
  font-family: 'Times New Roman';
  color: var(--four);
  text-align: center;
  width: 50%;
  font-size: 18px;
}

@media screen and (max-width: 960px) {
  section {
    height: 100%;
  }

  h3,
  p,
  .circular-div,
  .circular-img {
    margin-top: 50px;
  }
  
  .p-container:nth-child(3){
    margin-bottom: 250px;
  }
  
}
</style>
