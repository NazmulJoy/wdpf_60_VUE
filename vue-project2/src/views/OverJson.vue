<template>
  <div>
    <button @click="calldata">Fetch json file data here</button>
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
let response = await fetch("src/assets/myData.json");
this.mydata = await response.json();
}
}
}
</script>

<style>

</style>