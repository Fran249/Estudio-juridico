<template>
  <section>
    <div class="circular-div">
      <v-img class="circular-img" cover src="../assets/Random.jpg"></v-img>
    </div>

    <h3>Dr. Diego Martin Alvarez Sampaolesi</h3>
    <p>Abogado titular del estudio.</p>

    <p>
      Abogado especialista en derecho a la salud, egresado de la Universidad de Buenos Aires en el 2009. Ha desarrollado
      una vasta experiencia prestando todo tipo de servicios legales relacionados con derecho a la salud, ejerciendo
      labores en Capital Federal y el interior del país.
    </p>
    <p>
      El Estudio Sampaolesi se encuentra conformado por profesionales que con gran expertise en la materia, dan soporte a
      los clientes de manera intensiva y permanente de forma que se permita dar cobertura a todos los requerimientos de
      estos.
    </p>






  </section>
</template>


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
  height: 90dvh;
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
}

.dr {
  color: var(--two);
}

p {
  font-family: 'Times New Roman';
  color: var(--four);
  text-align: center;
  width: 50%;
}

@media screen and (max-width: 650px) {
  section {
    height: 100%;
  }

  h3,
  p,
  .circular-div,
  .circular-img {
    margin-top: 50px;
  }
}</style>
