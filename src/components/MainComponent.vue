<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: []
        }
    },
    created() {
        axios
        .get('http://localhost:8000/api/posts')
        .then(res =>{
            console.log(res)
        });

    }
}
</script>

<template>
 <h1>ciao main</h1>
</template>

<style scoped>

</style>
