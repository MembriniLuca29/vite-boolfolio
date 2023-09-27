<script>
import MainComponent from './components/MainComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  data(){
    return {
      
    }
  },
  components: {
    MainComponent,
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<template>

 <HeaderComponent/>

 <MainComponent/>

 <FooterComponent/>

</template>

<style scoped>

</style>
