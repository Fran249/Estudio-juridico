<template>
  <section>
    <div class="d-flex justify-center align-center flex-row flex-wrap w-100" style="gap: 20px; margin-top: 200px;">
      <v-card v-for="card in dataCards" :key="card.text" width="250" height="300" class="vcard">
        <v-card-title>
          <h3>{{ card.text }}</h3>
        </v-card-title>
        <v-card-text class="vcard-text">
          <p>
            {{ card.adress }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn icon="mdi-google-maps" color="#Fff" @click="redirectFunction(card)"></v-btn>
        </v-card-actions>
      </v-card>
      <div class="d-flex flex-column justify-center align-center" style="margin-bottom: 200px;">
        <h3 class="warning-text">EN TODAS LAS SEDES SE ATIENDE EXCLUSIVAMENTE CON CITA PREVIA</h3>
        <p class="sub-text">Horario de atención: De lunes a viernes de 9:00 hs a 18 hs.
        </p>
        <!--<div class="d-flex flex-column justify-center align-center" style="gap:60px; margin-top: 150px;">
          <form action="">
            <div class="d-flex flex-row" style="gap: 5px;">
              <h3>Nombre:</h3>
              <input type="text">
            </div>
            <div class="d-flex flex-row" style="gap: 5px">
              <h3>Correo Electronico:</h3>
              <input type="text">
            </div>
            <div class="d-flex flex-row" style="gap:5px">
              <h3>Asunto:</h3>
              <input type="text">
            </div>
            <div class="d-flex flex-column" style="gap: 5px;">
              <h3>Tu mensaje:</h3>
              <textarea width="100" height="100px"></textarea>
            </div>
            <h3></h3>
          </form>
        </div>-->
      </div>
    </div>


  </section>
</template>

<script>
export default {
  data: () => ({
    dataCards: [
      {
        text: 'Sede Central',
        adress: 'Obelisco Suipacha 355, 2 A Ciudad Autónoma de Buenos Aires.  (CP: 1008)',
        redirect: 'https://goo.gl/maps/qi1CHNHN5ymvFwrdA'
      },
      {
        text: 'Sede Caballito',
        adress: 'Venezuela 4234 Planta Baja, Ciudad Autónoma de Buenos Aires. (CP: 1424). Tel. fijo: 011 - 4957 - 0127',
        redirect: 'https://goo.gl/maps/7r7uSU2FbGHa14M17',
      },
      {
        text: 'Sede Floresta',
        adress: ' Juan Bautista Alberdi 4400 Ciudad Autónoma de Buenos Aires. (CP: 1407). Tel. fijo: Todavía no lo tenemos',
        redirect: 'https://goo.gl/maps/9o2b644W1T7qHAdN7'
      },
      {
        text: 'Sede Mar del Plata',
        adress: 'Necochea 3235, 5 B Mar del Plata, Provincia de Buenos Aires. (CP: 7600 ) Cel: 223- 605 - 1233',
        redirect: 'https://goo.gl/maps/4LxrxeYD2vwek1MY9'
      }


    ]

  }),
  methods: {
    redirectFunction(card) {
      let direccion = card.redirect
      window.open(direccion)
    }
  }


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
  height: 200dvh;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  background-image: url(../assets/contactos-bckg.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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

.vcard-text {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

h3,
p {
  font-family: 'Times New Roman';
  text-align: justify;
  color: var(--four);
}

h3 {
  font-weight: 100;
  font-size: 22px;
}

p {
  font-weight: 100;
}

.warning-text {
  font-family: 'EB Garamond', serif;
  text-align: justify;
  color: var(--four);
  font-weight: 100;
  font-size: 18px;
}

.sub-text {
  font-family: 'EB Garamond', serif;
  text-align: justify;
  color: var(--four);
  font-weight: 100;
  font-size: 16px;
}</style>