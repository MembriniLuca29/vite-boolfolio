<script>
import MainComponent from './components/MainComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  data(){
    return {
      
    }
  },
  components: {
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ProjectCard,
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
