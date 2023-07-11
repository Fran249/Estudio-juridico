<template>
    <NavBar/>
      <router-view v-slot="{Component}">
          <Transition name="slide-fade"  mode="out-in" >
              <component :is="Component"></component>
          </Transition>
      </router-view>
      <Footer/>

</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    //
  })
}
</script>



<style scoped >

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

</style>


