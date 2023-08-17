<template>
    <div class="navbar">
        <router-link class="mr-10 pb-6" v-for="rout in routerPaths" :key="rout.text" :to="rout.redirect"><h3>{{rout.text}}</h3></router-link>
      </div>
      <div class="navbar-mobile" >
        <v-btn  icon="mdi-dots-vertical" style="background-color: transparent; color: white;" elevation="0" @click="navOnOff()">
            
        </v-btn>
      </div>
</template>


<script>
import store from '@/store';

export default {
    name: 'NavBar',
    data: ()=>({
        routerPaths: [
            {
                text: 'INICIO',
                redirect: '/'
            },
            {
                text: 'QUIENES SOMOS',
                redirect: '/quienes-somos'
            },
            {
                text: 'ÁREA PRÁCTICA',
                redirect: '/area-practica',

            },
            {
                text: 'CONTACTO',
                redirect: '/contacto'
            },
            {
                text: 'LOGROS',
                redirect: '/logros'
            },
        ]
    }),
    methods: {
        navOnOff(){
            
            store.commit('navOnOff', true)
        }
        
    },
}


</script>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0;

    /* GAMA DE COLORES PASTEL*/

    --one: #be8519;
    --two: #000;
    --three: #173358;
    --four: #fff;
}

.navbar{
  z-index: 99999;
  position: absolute;
  display: flex;
  justify-content: right;
  background-color: transparent;
  height: 100px;
  gap: 20px;
  width: 100%;
}
a{
 
  text-decoration: none;
  height: 20px;

}
a:visited{
  color: var(--four);
}

h3:after{
    display:block;
  content: '';
  border-bottom: solid 1px var(--four);  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
h3:hover:after{
    transform: scaleX(1); 
}
h3{
    font-family: 'EB Garamond', serif;
    color: var(--four);
    font-weight: 100;
    font-size: 15px;
    letter-spacing: .5px;
}
.navbar-mobile{
    display: none;
}
@media screen and (max-width: 960px) {
    .navbar{
        display: none;
    }
    .navbar-mobile{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 50px ;
        position: absolute;
        background-color: transparent;
    }
}
</style>
