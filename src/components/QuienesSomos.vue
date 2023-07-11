<template>
  <section>
    <div class="circular-div">
      <v-img class="circular-img" cover src="../assets/Random.jpg"></v-img>
    </div>

    <h3>Dr. Diego Martin Alvarez Sampaolesi</h3>

    <p>
       Ámbito de ejercicio en Capital Federal y el
      interior del país.
      Más de 10 años de experiencia
    </p>
  </section>
</template>


<style scoped>
*{
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
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: black;
}

.circular-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 3px solid var(--one);
}

h3 {
  font-family: 'Times New Roman';
  color: var(--four);
  font-weight: 120;
}
.dr{
  color: var(--two);
}
p{
  font-family: 'Times New Roman';
  color: var(--four);
}</style>
