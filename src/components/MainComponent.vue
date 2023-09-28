<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue'; 

export default {
  components: {
    ProjectCard, 
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    axios
      .get('http://localhost:8000/api/posts')
      .then(res => {
        console.log(res);
        this.posts = res.data.results.data; 
      });
  }
}
</script>

<template>

<div>
    <h1>Project Card</h1>
    <ProjectCard :posts="posts" />
  </div>
    
</template>

<style scoped>

h1{
  text-align: center;
  font-size: 3rem;
  margin: 30px 0;
}
</style>
