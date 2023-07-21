<template>
  <section class="d-flex justify-center align-center">
    <div
      class="d-flex justify-center align-center flex-row flex-wrap w-100"
      style="gap: 20px"
    >
      <v-card
        @click="passInfo(item)"
        @mouseover="item.elevation = 15"
        @mouseleave="item.elevation = 0"
        :elevation="item.elevation"
        width="250px"
        height="250px"
        class="vcard"
        v-for="item in dialogLaw"
        :key="item.titleCard"
      >
        <v-card-text class="d-flex justify-center align-center pa-5 text-center">
          <h3 class="title">{{ item.titleCard }}</h3>
        </v-card-text>
      </v-card>
    </div>
    <v-dialog
        v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition">
      
        <div class="dialog-container">

        
            <div v-for="item in dialogInfo" :key="item.titleDialog">
                <div class="h3-btn-container">
                    <h3 class="title">
                    {{ item.titleDialog }}
                    </h3>
                    <v-btn style="color: #fff;" class="btn" elevation="0" width="50" height="50" icon="mdi-close"  @click="dialog = false"></v-btn>
                </div>
                <div class="text-container">
                    <h3 class="subtitle mb-5 mt-5 text-justify" v-for="subtitle in item.subtitles">
                    {{ subtitle.text }}
                    </h3>
                    <p class="text" v-for="paragraphs in item.paragraphs">
                        {{ paragraphs.text }}
                        <strong>{{ paragraphs.strong }}</strong>
                    </p>
                </div>
            </div>
        </div>
    </v-dialog>
  </section>
</template>

<script>
export default {
    name: 'Logros',
    data: () => ({
        dialog: false,
        dialogInfo : [],
        dialogLaw: [
            {
                titleCard: 'Mujer con diagnóstico de Diabetes Mellitus Tipo 1',
                titleDialog: 'Mujer con diagnóstico de Diabetes Mellitus Tipo 1.',
                subtitles:[
                    {
                        text: 'Se obtuvo cobertura de medidor de glucosa (Lector freestyle libre y sensores sistema flash de monitoreo de glucosa).',
                    },
                    {
                        text: 'Se transcribe parte dispositiva de la medida cautelar:'
                    }
                ] ,
                paragraphs: [
                    {
                        text:  '(...) Por todo lo expuesto, RESUELVO: ordenar a OSDE, que, en el plazo de dos (2) días, arbitre los medios necesarios para cubrir el 100% y proveer a la Sra.XXX ,del kit FreeStyle Libre comercializado por el laboratorio Abbott que consta de “una pantalla lectora y 1 sensor con su aplicador… debe reponerse solamente el sensor y su aplicador cada catorce días”, conforme las prescripciones médicas de la Sra. xxx - conforme certificados de fecha 21/03/22-, hasta que se dicte sentencia definitiva. Ello bajo apercibimiento, en caso de incumplimiento, de aplicar astreintes. (...)  JUZGADO CIVIL Y COMERCIAL FEDERAL 2  5625/2022 R.M.S c/ OSDE s/AMPARO DE SALUD.   FIRMA JUEZ FEDERAL SUBROGANTE: MARCELO BRUNO DOS SANTOS.'
                    }
                ],
                elevation: 0,
            },
            {
                titleCard: 'Hombre con asimetría facial maxilomandibular.',
                titleDialog: 'Hombre con asimetría facial maxilomandibular.',
                subtitles:[
                    {
                        text: 'Requería cirugía de corrección y su prepaga se la rechazaba. Se logró cobertura de la misma.',
                    },
                    {
                        text: 'Se transcribe parte pertinente de la medida cautelar:'
                    }
                ] ,
                paragraphs: [
                    {
                        text:  'San Martin, de octubre de 2022. Por lo expuesto, RESUELVO: 1) Hacer lugar a la medida cautelar peticionada por el Sr. B.B, bajo caución juratoria y, en consecuencia, ordenar a Swiss Medical S.A que arbitre lo conducente para la cobertura integral e inmediata de la cirugía ORTOGNÁTICA BIMAXILAR CON MENTOPLASTIA según roden y detalle de insumos acompañado, y todo lo que a dicho tratamiento acompaña sin carencias ni limitaciones temporales, hasta el alta efectiva, conforme prescripción médica expedida por el Dr. xxx, sin perjuicio del cargo de los mayores costos, debiendose acreditar su cumpliemtuo en el plazo de cinco (5) dias y bajo la spautas de cunmpliemnto señaklas en este decisorio (Considerando III). (...)  '
                    },
                    {
                        strong: '13129 B.B c/ SWISS MEDICAL SA s/AMPARO DE SALUD. FIRMA JUEZ SUBROGANTE: OSCAR ALBERTO PAPAVERO.'
                    }
                ],
                elevation: 0,
            },
            {
                titleCard: 'OSDE s/ AMPARO DE SALUD. ',
                titleDialog: 'OSDE s/ AMPARO DE SALUD.',
                subtitles:[
                    {
                        text: 'Caso testigo que muestra el ejercicio del derecho a  la salud y su reconocimiento en el ámbito judicial.',
                    },
                    {
                        text: 'Esta sentencia trata de una Sra. que interpone acción de amparo contra OSDE, al quedar sin cobertura médico - asistencial, social, ya que quieren transferirla compulsivamente al PAMI.'
                    },
                    {
                        text: 'Esta baja en la afiliación comprometía gravemente su salud, ya que se encontraba cursando cáncer de pulmón y debía ser intervenida quirúrgicamente.'
                    },
                    {
                        text: 'Se transcribe parte dispositiva de la sentencia. Interpretación confirmada por la Cámara Civil y Comercial Federal - Sala III):'
                    }
                ] ,
                paragraphs: [
                    {
                        text:  '(...) Por las consideraciones que anteceden, FALLO: 1) Hacer lugar a la presente acción de amparo promovida por A.M.C.C contra la Organización de Servicios Directos Empresarios (OSDE). En consecuencia, deberá mantener la afiliación de la actora, junto a su cónyuge, Sr. A.O.O y brindar la cobertura del Plan 410, en los términos establecidos en el considerando IV. (...)'
                    },
                    {
                        strong: '17987/2022 C, A.M.C c/ OSDE s/AMPARO DE SALUD CABA, .RDM. FIRMA JUEZ FEDERAL: JUAN RAFAEL STINCO.'
                    }
                ],
                elevation: 0,
            },
            {
                titleCard: 'OSECAC S/ AMPARO DE SALUD. ',
                titleDialog: 'OSECAC S/ AMPARO DE SALUD.',
                subtitles:[
                    {
                        text: 'Medida cautelar donde se logró la orden judicial de  cobertura total de la medicación oncológica, para la droga Lenalidomida, indicada por médico tratante. El paciente padece la enfermedad de mieloma múltiple.',
                    },
                    {
                        text: 'Se transcribe parte pertinente de la medida cautelar:'
                    },
                ] ,
                paragraphs: [
                    {
                        text:  'Dispónese  que hasta tanto se resuelva la pretensión en autos, OBRA SOCIAL DE LOS EMPLEADOS DE COMERCIO Y ACTIVIDADES CIVILES (OSECAC), deberá arbitrar los medios pertinentes para suministra a la Sra. XXX, en el término de dos días y por la vía que corresponda, con cobertura total (100%) la medicación LENALIDOMIDA comprimidos y continuar en lo sucesivo con el suministro de la misma, de acuerdo a las indicaciones y por el tiempo que establezca el médico tratante”.'
                    },
                    {
                        strong: 'FIRMADO POR: JUEZ FEDERAL SUBROGANTE MARCELO GOTA. '
                    }
                ],
                elevation: 0,
            }
        ]
    }),
    methods:{
        passInfo(item){
            console.log(item)
            this.dialogInfo = [item]
            this.dialog = true
        }
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

section {
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
h3{
    font-family: 'Times New Roman';
    font-weight: lighter;
    text-align: center;
  
    color: var(--four);
}

p {
  font-family: 'Times New Roman';
  text-align: justify;
  color: var(--four);
}

.dialog-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    background-color: var(--five);
}
.btn{
    background-color: transparent;
    margin-left: 15px;
    border: 1px solid goldenrod;
}
.h3-btn-container{
    display: grid;
    grid-template-columns: repeat(3, calc(100% /3));
    grid-template-rows: 1 40px;
    margin-top: 200px;
}

.title{
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--one);
}
.btn{
    grid-row: 1/2;
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text-container{
    width: 100%;
    padding: 0% 25% 0% 25%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
}
</style>
