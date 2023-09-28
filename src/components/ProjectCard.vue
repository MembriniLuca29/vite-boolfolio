
<script>
export default {
  props: {
    posts: Array,
  },
}
</script>

<template>
    <div class="container">
      <div v-for="item in posts" :key="item.id" class="card">
        <div class="card-body">
          <h2 class="card-title">{{ item.title }}</h2>
          <p class="card-text">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
}
.card{
    width: calc(100% / 3);
    margin: 20px auto;


}
.card-body{
    width: 400px;
    height: 300px;
    background-color: gainsboro;
    padding: 20px;
}
.card-title{
  text-align: center;
  font-size: 2.4rem;
  padding: 20px;
}
p{
  font-size: 1.4rem;
  text-align: center;
}
</style>
