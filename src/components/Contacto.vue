<template>
  <section class="d-flex justify-center align-center">
    <div class="d-flex justify-center align-center flex-row flex-wrap w-100" style="gap: 20px;">
      <v-card v-for="card in dataCards" :key="card.text" width="250" height="300" class="vcard">
        <v-card-title>
          <h3>{{ card.text }}</h3>
        </v-card-title>
        <v-card-text class="vcard-text">
          <p >
            {{ card.adress }}
          </p>
          <p>
            {{ card.cp }}
          </p>
          <p>
            {{card.cel}}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn icon="mdi-google-maps" color="#Fff" @click="redirectFunction(card)" class="v-btn-animation"></v-btn>
        </v-card-actions>
      </v-card>
      <div class="d-flex flex-column justify-center align-center" style="margin-bottom: 200px;">
        <h3 class="warning-text">EN TODAS LAS SEDES SE ATIENDE EXCLUSIVAMENTE CON CITA PREVIA</h3>
        <p class="sub-text">Horario de atención: De lunes a viernes de 9:00 hs a 18 hs.
        </p>
        <div class="d-flex flex-column justify-center align-center form-container" style="gap:60px; margin-top: 150px;">
          <form action="">
              <input type="text" name="name" placeholder="Nombre">
              <input type="text" name="email" placeholder="Correo Electronico">
              <input type="text" name="asunto" placeholder="Asunto">
              <textarea placeholder="Tu mensaje" class="mensaje" name="msg" id="" cols="30" rows="10"></textarea>
            <div class="w-100 d-flex flex-row justify-center align-center">
              <button class="form-button">
                <h3>Enviar</h3>
              </button>
            </div>
          </form>
        </div>
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
        adress: 'Suipacha 355, 2 A Ciudad Autónoma de Buenos Aires.   ',
        redirect: 'https://goo.gl/maps/qi1CHNHN5ymvFwrdA',
        cp: '(CP: 1008).',
        cel: 'Cel: 011- 2639 - 7764. Tel. fijo: 011 - 4957 - 0127 / 011 - 3973 - 0607.'
      },
      {
        text: 'Sede Caballito',
        adress: 'Venezuela 4234 Planta Baja, Ciudad Autónoma de Buenos Aires. ',
        redirect: 'https://goo.gl/maps/7r7uSU2FbGHa14M17',
        cp: ' (CP: 1424).',
        cel: 'Tel. fijo: 011 - 4957 - 0127.'

      },
      {
        text: 'Sede Floresta',
        adress: ' Juan Bautista Alberdi 4400 Ciudad Autónoma de Buenos Aires. ',
        redirect: 'https://goo.gl/maps/9o2b644W1T7qHAdN7',
        cp: '(CP: 1407).'

      },
      {
        text: 'Sede Mar del Plata',
        adress: 'Necochea 3235, 5 D Mar del Plata, Provincia de Buenos Aires.',
        redirect: 'https://goo.gl/maps/4LxrxeYD2vwek1MY9',
        cp: '(CP: 7600 )',
        cel: 'Cel: 223- 605 - 1233.'

      }


    ]

  }),
  methods: {
    redirectFunction(card) {
      let direccion = card.redirect
      window.open(direccion)
    },

    ValidateEmail(){

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (input.value.match(validRegex)) {

          alert("Valid email address!");

          document.form1.text1.focus();

          return true;

        } else {

          alert("Invalid email address!");

          document.form1.text1.focus();

          return false;

        }

        }
  },


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
  padding-top: 200px;
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
  align-items: flex-start;
  flex-direction: column;
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
}
.form-container{
  backdrop-filter: blur(10px);
  border: 1px solid var(--one);
  width: 90%;
  height: 500px;
}
form{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  align-items: flex-start;
  padding: 50px;
}
form input, textarea{
  border: 1px solid var(--one);
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--four);
  margin-left: 10px;
}
form input::placeholder, form textarea::placeholder{
  text-align: left;
  padding-left: 10px;
  font-family: 'EB Garamond', serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  font: lighter;

}

.mensaje{
  height: 150px;
}

input:focus , textarea:focus{
  outline: transparent;
 }
 textarea{
  resize: none;
 }

.form-button{
  background-color: transparent;
  border: 1px solid var(--one);
  backdrop-filter: blur(10px);
  width: 100px;
  height: 40px;
  
}
.form-button:hover{
  transform: translateX(1px) translateY(1px);
  transition: 0.5s ease-out;
}
.form-button h3{
  font-size: 20px;
  font-family: 'EB Garamond', serif;
  text-align: center;
}

.v-btn-animation {
  animation: upAndDown infinite 1s ease-in-out;
}
.v-btn-animation:hover{
  animation: none;
}

@keyframes upAndDown {
  0%{
    transform: translateY(0px);
  }
  33%{
    transform: translateY(-5px);
  }
  66%{
    transform: translateY(5px);
  }
  100%{
    transform: translateY(0px);
  }
}


@media screen and (max-width: 650px){
  .warning-text {
  padding: 50px;
  text-align: center;
  font-weight: 100;
  font-size: 18px;
}
}
</style>