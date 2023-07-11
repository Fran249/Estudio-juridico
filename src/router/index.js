import { createRouter, createWebHistory } from 'vue-router'
import MainCont from '../components/MainCont.vue'
import QuienesSomos from '../components/QuienesSomos.vue'
import AreaDePractica from '../components/AreaDePractica.vue'
import Contacto from '../components/Contacto.vue'
import Sucursales from '../components/Sucursales.vue'
import Novedades from '../components/Novedades.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {
      path: '/',
      component: MainCont,
    },
    {
      path: '/quienes-somos',
      component: QuienesSomos,
    },
    {
      path: '/area-de-practica',
      component: AreaDePractica,
    },
    {
      path: '/contacto',
      component: Contacto,
    },
    {
      path: '/sucursales',
      component: Sucursales,
    },
    {
      path: '/novedades',
      component: Novedades,
    },

  ]
})

export default router
