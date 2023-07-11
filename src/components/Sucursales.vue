<template>
    <section>

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
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(0,0,0);
background: linear-gradient(318deg, rgba(0,0,0,0.5186449579831933) 25%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 61%);
gap: 20px;
}
.text-container{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-left: 1px solid var(--one);
    border-bottom: 1px solid var(--one);
    padding-left: 50px;
    padding-bottom: 20px;
}
h3, p {
  font-family: 'Times New Roman';
  text-align:justify
}




</style>