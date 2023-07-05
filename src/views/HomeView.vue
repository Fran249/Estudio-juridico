<template>
  <NavBar/>
  <MainCont />
  <v-footer height="60" color="#be8519">
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


<style>


</style>
