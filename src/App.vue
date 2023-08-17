<template>
  <v-app>
    <NavBar />
      <router-view v-slot="{Component}">
          <Transition name="slide-fade"  mode="out-in" >
              <component :is="Component"></component>
          </Transition>
      </router-view>

      <v-navigation-drawer
        style="background-color: transparent; backdrop-filter: blur(15px);"
        v-model="navOnOff"
        temporary
        absolute
   >
            <v-list class=" d-flex justify-center align-center flex-column text-justify">
                <v-list-item  class="mt-10" v-for="rout in routerPaths" :key="rout.text">
                    <router-link class="mr-10 pb-6"  :to="rout.redirect"><h3>{{rout.text}}</h3></router-link>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
  </v-app>

</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import store from './store';
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    
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
                text: 'AREA DE PRACTICA',
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
  computed:{

    navOnOff: {
           get(){
              return store.state.navOnOff
           },
           set(value){
             store.commit('navOnOff', value)
           }
        }
  }
}
</script>



<style scoped >


*{
    margin: 0;
    padding: 0;

    /* GAMA DE COLORES PASTEL*/

    --one: #be8519;
    --two: #000;
    --three: #173358;
    --four: #fff;
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
 border-bottom: solid 1px var(--one);  
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

.nav-bar{
  height: 100px;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  gap: 20px;
  color: black;
 position: absolute;
 top: 0;
 left: 0;
}

a{
  color: black;
  text-decoration: none;
  height: 20px;
}
a:visited{
  color: black;
}
a:hover , a.router-link-active{
  border-bottom: 1px solid black;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from{
  transform: translateX(-100px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

@media screen and (max-width: 650px) {

  h3{

   font-size: 18px;

}

  

}
</style>


