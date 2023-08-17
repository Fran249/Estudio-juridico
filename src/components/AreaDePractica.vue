<template>
    <section>
        <div class="text-container">
            <h3 class="title">
                AMPAROS DE SALUD
            </h3>
            <p>
                Estudio Sampaolesi ofrece a sus clientes servicios de asistencia jurídica en lo que respecta a garantizar la
                protección del Derecho a la Salud.

            </p>
            <p>
                Contamos con más de 10 años de experiencia en relación al Derecho a la Salud, durante los cuales se han
                obtenido numerosas sentencias favorables sobre diversos temas.
            </p>
            <p>
                El Derecho a la Salud, es una disciplina en permanente cambio y transformación, según las demandas de la
                realidad política, económica y social con la que interactúa.
            </p>
            <p>
                Es por ello, que conocer los derechos con los que contamos y las novedades jurídicas, es de especial
                importancia para poder defenderlos y hacerlos cumplir.
            </p>
            <p>
                Según la Organización Mundial de la Salud (<strong>OMS</strong>), “La salud es un estado completo de
                bienestar físico, mental
                y social, y no solamente la ausencia de afecciones o enfermedades”.
            </p>
            <p>
                El Derecho a la Salud es un derecho humano fundamental. En Argentina, la salud es un derecho reconocido por
                la Constitución Nacional (Art. 16, Art. 42, Art 75 inc. 23) y por numerosos Tratados Internacionales de
                Derechos Humanos con jerarquía constitucional, entre los cuales podemos destacar, la Declaración Americana
                de los Derechos y Deberes del Hombre (Art. 2); la Declaración Universal de Derechos Humanos (Art. 25, Art.
                7), la Convención Americana sobre Derechos Humanos, denominada Pacto de San José de Costa Rica (Art. 24 y
                Art. 1.1); el Pacto Internacional de Derechos Civiles y Políticos (Art. 26); el Pacto Internacional de
                Derechos Económicos, Sociales y Culturales (Art. 12).
            </p>

            <p>
                Por medio de una acción de amparo, se puede proteger el derecho de la salud, logrando una solución rápida y
                expedita, frente a la falta de cobertura o eficiencia en la prestación del servicio, en relación a la Obra
                Social y Prepaga. Es una herramienta jurídica procesal que se caracteriza por la rapidez de su tramitación,
                en comparación con una demanda ordinaria o común.
            </p>
            <p>
                Conforme lo determina el Art. 43 de la Constitución Nacional, la procedencia de la acción de amparo se
                encuentra supeditada a la existencia de determinados requisitos: el acto u omisión de un particular, la
                inmediatez, una lesión actual e inminente y la arbitrariedad e ilegalidad manifiesta.
            </p>
            <div>
                <p style="text-decoration: underline; text-decoration-color: #fff;">
                    <strong>A través de esta vía se puede obtener, entre otras cosas:</strong>
                </p>
                <li><strong>Cobertura de tratamientos médicos.</strong></li>
                <li><strong>Cobertura de cirugías.</strong></li>
                <li><strong>Cobertura de medicamentos.</strong></li>
                <li><strong>Cobertura de estudios de alta complejidad.</strong></li>
                <li><strong>Cobertura de internación domiciliaria.</strong></li>
                <li><strong>Cobertura de internación en instituciones geriátricas.</strong></li>
                <li><strong>Continuidad en la misma obra social y/o plan superador que se gozaba en actividad, una vez jubilado/a.</strong>
                </li>
                <li><strong>Cobertura total de tratamientos médicos para personas con discapacidad, según Ley 24.901.</strong></li>
                <li><strong>Cobertura de tratamientos de fertilidad.</strong></li>
            </div>
            <p>
                <strong>
                    En caso de que la Obra Social o Empresa de Medicina Prepaga se niegue o demore en brindar cobertura a tus
                    necesidades médicas, contamos con una herramienta para que dichas instituciones cumplan con sus
                    obligaciones, y de esta manera no se vulnere el derecho a la salud.
                </strong>
            </p>
        </div>
        <div class="text-container text2 mt-10">
            <h3 class="title"> ¿ Qué es el <strong>Programa Médico Obligatorio (PMO)</strong>?</h3>
            <p>
                El <strong>PMO</strong> incluye todas las prestaciones que tu obra social o prepaga tiene que cubrir de
                manera obligatoria,
                cualquiera que sea tu plan.
            </p>
            <p>Las prestaciones comprendidas en el <strong>Programa Médico Obligatorio</strong> abarcan un piso que puede
                ampliarse cuando en
                el caso concreto, se encuentra comprometido el derecho a la salud, entendiendo este derecho en su sentido
                amplio, en virtud de la supremacía constitucional consagrada por el Art.31 de la Constitución Nacional.
            </p>
            <p>
                Respecto a los límites de cobertura del <strong>PROGRAMA MÉDICO OBLIGATORIO</strong>, el mismo es concebido como un régimen
                mínimo de prestaciones que las obras sociales deben garantizar, para cuya implementación no resulta
                aceptable la implantación de un menú que reduzca las prestaciones habituales, como así también que,
                independientemente de la cobertura prevista en el programa, no existan patologías excluidas.
            </p>
            <div class="w-100">
                <p>La limitación en la cobertura debe ser entendida como un “piso prestacional”.</p>
            </div>
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

@font-face {
    font-family: 'Times New Roman';
    src: url('../assets/fonts/times.ttf');
}
li {
    font-size: bold;
}
section {
    width: 100dvw;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(../assets/nuestros-servicios-bckg.svg);
    background-size: cover;
    gap: 20px;
}

.text-container {
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

h3,
p,
li {
    font-family: 'Times New Roman';
    text-align: justify;
    color: var(--four);
    font-size: 18px;
}

h3 {
    font-weight: 120;
    font-size: 20px;
}

.title {
    font-weight: 600;
    letter-spacing: 1px;
}

@media screen and (max-width: 650px) {
    .text-container {
        width: 95%;
        padding: 50px;
       
    }
    .text2{
        margin-bottom: 200px;
    }
    section{
        background-image: none;
        background-color: #173358;
    }
}</style>