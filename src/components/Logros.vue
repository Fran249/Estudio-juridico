<template>
    <section class="d-flex justify-center align-center section1">
        <div class="d-flex justify-center align-center flex-row flex-wrap w-100 card-cont" style="gap: 20px">
            <v-card @click="dialog1 = true" width="250px" height="250px" class="vcard">
                <v-card-text class="d-flex justify-center align-center pa-5 text-center">
                    <h3 class="title1 forallh3">Mujer con diagnóstico de Diabetes Mellitus Tipo 1.</h3>
                </v-card-text>
            </v-card>
            <v-card @click="dialog2 = true" width="250px" height="250px" class="vcard">
                <v-card-text class="d-flex justify-center align-center pa-5 text-center">
                    <h3 class="title1 forallh3">Hombre con asimetría facial maxilomandibular.</h3>
                </v-card-text>
            </v-card>
            <v-card @click="dialog3 = true" width="250px" height="250px" class="vcard">
                <v-card-text class="d-flex justify-center align-center pa-5 text-center">
                    <h3 class="title1 forallh3">CONTINUIDAD EN LA MISMA OBRA SOCIAL Y PREPAGA LUEGO DE OBTENER EL BENEFICIO
                        JUBILATORIO.</h3>
                </v-card-text>
            </v-card>
            <v-card @click="dialog4 = true" width="250px" height="250px" class="vcard">
                <v-card-text class="d-flex justify-center align-center pa-5 text-center">
                    <h3 class="title1 forallh3">COBERTURA TOTAL DE MEDICACIÓN ONCOLÓGICA.</h3>
                </v-card-text>
            </v-card>

        </div>
        <Footer class="footer1" />
        <v-dialog v-model="dialog1" fullscreen :scrim="false" transition="dialog-bottom-transition">

            <div class="dialog-container">


                <div>
                    <div class="h3-btn-container">
                        <h3 class="title1 forallh3" style="text-decoration: underline; text-decoration-color: #FFF ;">
                            Mujer con diagnóstico de Diabetes Mellitus Tipo 1.
                        </h3>
                        <v-btn style="color: #fff;" class="btn1" elevation="0" width="50" height="50" icon="mdi-close"
                            @click="dialog1 = false"></v-btn>
                    </div>
                    <div class="text-container1">
                        <h3 class="subtitle mb-5 mt-5 text-justify forallh3" style="font-weight: 500;">
                            <strong>Se obtuvo cobertura de medidor de glucosa (Lector freestyle libre y sensores sistema
                                flash de monitoreo de glucosa). </strong>
                        </h3>
                        <h3 class="subtitle mb-5 mt-5 text-justify forallh3"
                            style="text-decoration: underline; text-decoration-color: #FFF ;">
                            Se transcribe parte dispositiva de la medida cautelar:
                        </h3>
                        <p class="text1 forallp">
                            (...) Por todo lo expuesto, <span style="font-style: italic;"><strong>RESUELVO:</strong></span>
                            ordenar a OSDE, que, en el plazo de dos (2) días, arbitre
                            los medios necesarios para cubrir el 100% y proveer a la Sra.XXX , del kit FreeStyle Libre
                            comercializado por el laboratorio Abbott que consta de “una pantalla lectora y 1 sensor con su
                            aplicador… debe reponerse solamente el sensor y su aplicador cada catorce días”, conforme las
                            prescripciones médicas de la Sra. xxx - conforme certificados de fecha 21/03/22-, hasta que se
                            dicte sentencia definitiva. Ello bajo apercibimiento, en caso de incumplimiento, de aplicar
                            astreintes. (...) <span style="font-style: italic;">
                                <strong>
                                    JUZGADO CIVIL Y COMERCIAL FEDERAL 2 5625/2022 R.M.S c/ OSDE s/AMPARO DE SALUD.
                                    FIRMA JUEZ FEDERAL SUBROGANTE: MARCELO BRUNO DOS SANTOS.
                                </strong>
                            </span>

                        </p>
                    </div>
                </div>
            </div>
        </v-dialog>
        <v-dialog v-model="dialog2" fullscreen :scrim="false" transition="dialog-bottom-transition">

            <div class="dialog-container">


                <div>
                    <div class="h3-btn-container">
                        <h3 class="title1 forallh3" style="text-decoration: underline; text-decoration-color: #FFF ;">
                            Hombre con asimetría facial maxilomandibular.
                        </h3>
                        <v-btn style="color: #fff;" class="btn1" elevation="0" width="50" height="50" icon="mdi-close"
                            @click="dialog2 = false"></v-btn>
                    </div>
                    <div class="text-container1">
                        <h3 class="subtitle mb-5 mt-5 text-justify forallh3" style="font-weight: 500;">
                            <strong>Requería cirugía de corrección y su prepaga se la rechazaba. Se logró cobertura de la
                                misma.
                            </strong>
                        </h3>
                        <h3 class="subtitle mb-5 mt-5 text-justify forallh3"
                        style="text-decoration: underline; text-decoration-color: #FFF ;">
                            <strong>Se transcribe parte pertinente de la medida cautelar:</strong>
                        </h3>
                        <p class="text1 forallp">
                            San Martin, de octubre de 2022. Por lo expuesto, <span
                                style="font-style: italic;"><strong>RESUELVO:</strong></span> 1) Hacer lugar a la medida
                            cautelar
                            peticionada por el Sr. B.B, bajo caución juratoria y, en consecuencia, ordenar a Swiss Medical
                            S.A que arbitre lo conducente para la cobertura integral e inmediata de la cirugía ORTOGNÁTICA
                            BIMAXILAR CON MENTOPLASTIA según roden y detalle de insumos acompañado, y todo lo que a dicho
                            tratamiento acompaña sin carencias ni limitaciones temporales, hasta el alta efectiva, conforme
                            prescripción médica expedida por el Dr. xxx, sin perjuicio del cargo de los mayores costos,
                            debiendose acreditar su cumpliemtuo en el plazo de cinco (5) dias y bajo la spautas de
                            cunmpliemnto señaklas en este decisorio (Considerando III). (...) <span
                                style="font-style: italic;"><strong>13129 B.B c/ SWISS MEDICAL SA
                                    s/AMPARO DE SALUD. FIRMA JUEZ SUBROGANTE: OSCAR ALBERTO PAPAVERO.</strong></span>

                        </p>
                    </div>
                </div>
            </div>
        </v-dialog>
        <v-dialog v-model="dialog3" fullscreen :scrim="false" transition="dialog-bottom-transition">

            <div class="dialog-container">


                <div>
                    <div class="h3-btn-container-for-mobile-desk" >
                        <h3 class="title1 forallh3" style="text-decoration: underline; text-decoration-color: #FFF ;">
                            OSDE s/ AMPARO DE SALUD. CONTINUIDAD EN LA MISMA OBRA SOCIAL Y PREPAGA LUEGO DE OBTENER EL
                            BENEFICIO JUBILATORIO.
                        </h3>
                        <v-btn style="color: #fff;" class="btn1" elevation="0" width="50" height="50" icon="mdi-close"
                            @click="dialog3 = false"></v-btn>
                    </div>
                    <div class="text-container1">
                        <h3 class="subtitle mb-5 mt-5 text-justify forallh3" style="font-weight: 500;">
                            <strong>Caso testigo que muestra el ejercicio del derecho a la salud y su reconocimiento en el
                                ámbito judicial.
                                Esta sentencia trata de una Sra. que interpone acción de amparo contra OSDE, al quedar sin
                                cobertura médico - asistencial, social, ya que quieren transferirla compulsivamente al PAMI.
                                Esta baja en la afiliación comprometía gravemente su salud, ya que se encontraba cursando
                                cáncer de pulmón y debía ser intervenida quirúrgicamente.

                            </strong>
                        </h3>
                        <h3 class="subtitle mb-5 mt-5 text-justify forallh3"
                        style="text-decoration: underline; text-decoration-color: #FFF ;">
                            <strong>Se transcribe parte dispositiva de la sentencia. Interpretación confirmada por la Cámara
                                Civil y Comercial Federal - Sala III):</strong>
                        </h3>
                        <p class="text1 forallp">
                            (...) Por las consideraciones que anteceden, FALLO: 1) Hacer lugar a la presente acción de
                            amparo promovida por A.M.C.C contra la Organización de Servicios Directos Empresarios (OSDE). En
                            consecuencia, deberá mantener la afiliación de la actora, junto a su cónyuge, Sr. A.O.O y
                            brindar la cobertura del Plan 410, en los términos establecidos en el considerando IV. (...)
                            <span style="font-style: italic;"><strong>17987/2022 C, A.M.C c/ OSDE s/AMPARO DE SALUD CABA,
                                    .RDM. FIRMA JUEZ FEDERAL: JUAN RAFAEL
                                    STINCO.</strong></span>

                        </p>
                    </div>
                </div>
            </div>
        </v-dialog>
        <v-dialog v-model="dialog4" fullscreen :scrim="false" transition="dialog-bottom-transition">

            <div class="dialog-container">


                <div>
                    <div class="h3-btn-container">
                        <h3 class="title1 forallh3" style="text-decoration: underline; text-decoration-color: #FFF ;">
                            OSECAC S/ AMPARO DE SALUD. COBERTURA TOTAL DE MEDICACIÓN ONCOLÓGICA.
                        </h3>
                        <v-btn style="color: #fff;" class="btn1" elevation="0" width="50" height="50" icon="mdi-close"
                            @click="dialog4 = false"></v-btn>
                    </div>
                    <div class="text-container1">
                        <h3 class="subtitle mb-5 mt-5 text-justify forallh3" style="font-weight: 500;">
                            <strong>Medida cautelar donde se logró la orden judicial de cobertura total de la medicación
                                oncológica, para la droga Lenalidomida, indicada por médico tratante. El paciente padece la
                                enfermedad de mieloma múltiple.
                            </strong>
                        </h3>
                        <p class="text1 forallp">
                            <span class="forallh3 subtitle"
                            style="text-decoration: underline; text-decoration-color: #FFF ; font-size: 18px;">Se
                                transcribe parte pertinente de la medida cautelar:</span> <span style="font-style: italic;">
                                    “Dispónese que hasta tanto se
                            resuelva la
                            pretensión en autos, OBRA SOCIAL DE LOS EMPLEADOS DE COMERCIO Y ACTIVIDADES CIVILES (OSECAC),
                            deberá arbitrar los medios pertinentes para suministra a la Sra. XXX, en el término de dos días
                            y por la vía que corresponda, con cobertura total (100%) la medicación LENALIDOMIDA comprimidos
                            y continuar en lo sucesivo con el suministro de la misma, de acuerdo a las indicaciones y por el
                            tiempo que establezca el médico tratante”
                                </span>. <strong>FIRMADO POR: JUEZ FEDERAL SUBROGANTE MARCELO GOTA.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </v-dialog>
    </section>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    components: {
        Footer,
    },
    name: 'Logros',
    data: () => ({
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
    }),
    methods: {

    }
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
    --five: #173358;
}

@font-face {
    font-family: "Times New Roman";
    src: url("../assets/fonts/times.ttf");
}

.section1 {
    width: 100dvw;
    height: 100%;
    background-image: url(../assets/logros-bckg.svg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vcard {
    border-radius: 1px;
    border: 1px solid var(--one);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(10px);
}


.forallh3 {
    font-family: 'Times New Roman';
    font-weight: lighter;
    text-align: center;

    color: var(--four);
}

.forallp {
    font-family: 'Times New Roman';
    text-align: justify;
    color: var(--four);
    font-style: italic;
}

.dialog-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    background-color: var(--five);
}

.btn1 {
    background-color: transparent;
    margin-left: 15px;
    border: 1px solid goldenrod;
}

.h3-btn-container {
    display: grid;
    grid-template-columns: repeat(3, calc(100% /3));
    grid-template-rows: 1 40px;
    margin-top: 200px;
}
.h3-btn-container-for-mobile-desk{
    display: grid;
    grid-template-columns: repeat(3, calc(100% /3));
    grid-template-rows: 1 40px;
    margin-top: 200px;
}

.title1 {
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
}

.btn {
    grid-row: 1/2;
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-container1 {
    width: 100%;
    padding: 0% 25% 0% 25%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
}

@media screen and (max-width: 960px) {
    .section1 {
        height: 100%;
    }

    .card-cont {
        margin-bottom: 200px;
        margin-top: 150px;
    }

    .dialog-sub-cont {
        margin-top: 150px;
    }

    .h3-btn-container {
        margin-top: 250px;
    }

    .h3container1 {
        
    }

    .text-container1 {
        padding: 0% 5% 0% 5%;

    }

    .vcard:nth-child(4){
    margin-bottom: 150px;
}
 .forallh3{
    font-size: 20px;
    line-height: 25px;
 }
 .forallp {
    font-size: 20px;
}
.h3-btn-container{
    margin-top: 500px;
}
.h3-btn-container-for-mobile-desk{
    margin-top: 800px;
}

}</style>
