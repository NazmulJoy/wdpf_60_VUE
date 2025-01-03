<template>
  <div>
    <button @click="calldata">Fetch text file data here</button>
    <h1 v-if="mydata">{{ mydata }}</h1>
  </div>
</template>

<script>
export default {
data(){
return{
 mydata:null,
}
},
methods:{
 async calldata(){
let response = await fetch("src/assets/file.txt");
this.mydata = await response.text();
}
}
}
</script>

<style>

</style>