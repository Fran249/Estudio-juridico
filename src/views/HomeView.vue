<template>
  <NavBar/>
  <MainCont />
  <v-footer height="60" color="#9E9B70">
    <h3>Footer</h3>
  </v-footer>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import MainCont from '../components/MainCont.vue'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    MainCont,

  }
})
</script>
