<template>
    <section>
        <div class="text-container">
            <h3>
            Amparos de Salud
        </h3>
        <p>
            El Derecho a la Salud es un derecho humano fundamental. En Argentina, la salud es un derecho reconocido por la
            Constitución Nacional.

        </p>
        <p>
            Según la <strong>OMS</strong> (Organización Mundial de la Salud), “La salud es un estado completo de bienestar físico, mental y
            social, y no solamente la ausencia de afecciones o enfermedades”.

        </p>
        <p>
            Por medio de una Acción de amparo, se puede proteger el derecho de la salud, logrando una solución rápida y
            expedita, frente a la falta de cobertura o eficiencia en la prestación del servicio, en relación a la Obra
            Social y Prepaga.
        </p>
        <p>
            A través de esta vía se puede obtener cobertura de un determinado tratamiento médico, cirugía, obtención de
        medicamentos, estudios de alta complejidad, órdenes de internación y continuidad en la afiliación con la misma
        obra social de la que gozaba en actividad.
    </p>
        </div>
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
 background-image: url(../assets/nuestros-servicios-bckg.png);
 background-size: cover;
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
  text-align:justify;
  color: var(--four);
}

h3{
    font-weight: 120;
}




</style>