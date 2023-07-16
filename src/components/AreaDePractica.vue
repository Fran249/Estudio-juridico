<template>
    <section>
        <div class="text-container">
            <h3 class="title">
            Amparos de Salud
            </h3>
        <p>
            El Derecho a la Salud es un derecho humano fundamental. En Argentina, la salud es un derecho reconocido por la Constitución Nacional.

        </p>
        <p>
            Según la <strong>OMS</strong> (Organización Mundial de la Salud), “La salud es un estado completo de bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades”.

        </p>
        <p>
            Por medio de una Acción de amparo, se puede proteger el derecho de la salud,  logrando una solución rápida y expedita, frente a la falta de cobertura o eficiencia en la prestación del servicio, en relación a la Obra Social y Prepaga.
        </p>
            <div>
                <p>
                A través de esta vía se puede obtener, entre otras cosas: 
        </p>
            <li>Cobertura de tratamientos médicos.</li>
            <li>Cobertura de cirugías.</li>
            <li>Cobertura de medicamentos.</li>
            <li>Cobertura de estudios de alta complejidad.</li>
            <li>Cobertura de internación domiciliaria.</li>
            <li>Cobertura de internación en instituciones geriátricas.</li> 
            <li>Continuidad en la misma obra social y/o plan superador que se gozaba en actividad, una vez jubilado/a.</li>
            <li>Cobertura total de tratamientos médicos para personas con discapacidad, según Ley 24.901.</li>
            <li>Cobertura de tratamientos de fertilidad.</li>
            <li>Reintegros por aumentos excesivos de cuota.</li>
            </div>
            <p>
            En caso de que la Obra Social o Empresa de Medicina Prepaga se niegue o demore en brindar cobertura médica, contamos con una herramienta para que dichas instituciones cumplan con sus obligaciones, y de esta manera no se vulnere el derecho a la salud, que cuenta con expresa protección en nuestra Constitución Nacional. 
        </p>
        </div>
        <div class="text-container mt-10">
            <h3 class="title"> ¿ Qué es el <strong>Programa Médico Obligatorio (PMO)</strong>?</h3>
            <p>
                El <strong>PMO</strong> incluye todas las prestaciones que tu obra social o prepaga tiene que cubrir de manera obligatoria, cualquiera que sea tu plan.
            </p>
            <p>Las prestaciones comprendidas en el <strong>Programa Médico Obligatorio</strong> abarcan un piso que puede ampliarse cuando en el caso concreto, se encuentra comprometido el derecho a la salud, entendiendo este derecho en su sentido amplio, en virtud de la supremacía constitucional consagrada por el Art.31 de la Constitución Nacional. 
            </p>
            <p>
                Respecto a los límites de cobertura del <strong>PROGRAMA MÉDICO OBLIGATORIO</strong>, el mismo es concebido como un régimen mínimo de prestaciones que las obras sociales deben garantizar, para cuya implementación no resulta aceptable la implantación de un menú que reduzca las prestaciones habituales, como así también que, independientemente de la cobertura prevista en el programa, no existan patologías excluidas.
            </p>
            <div class="w-100">
                <p>La limitación en la cobertura debe ser entendida como un “piso prestacional”.</p>
            </div>
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
  padding-top: 100px;
  padding-bottom: 100px;
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
h3, p, li {
  font-family: 'Times New Roman';
  text-align:justify;
  color: var(--four);
}

h3{
    font-weight: 120;
}
.title{
    font-weight: 600;
    letter-spacing: 1px;
}

@media screen and (max-width: 650px){
    .text-container{
        width: 100%;
        padding: 50px;
    }
}

</style>