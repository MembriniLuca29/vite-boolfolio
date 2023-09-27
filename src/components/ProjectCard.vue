
<script>
export default {
  props: {
    posts: Array,
  },
}
</script>

<template>
    <div>
      <h2>elemento stampato correttamente in pagina</h2>
      
      <div v-for="item in posts" :key="item.id" class="card">
        <div class="card-body">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-text">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  

<style scoped>
.container{
    display: flex;
    width: 80%;
    margin: 0 auto;
}
.card{
    width: 100%;
    margin: 20px auto;


}
.card-body{
    width: 300px;
    height: 200px;
    background-color: aqua;
    padding: 20px;
}
</style>
