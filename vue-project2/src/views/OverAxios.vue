<template>
  <div>
    <button @click="calldata">Fetch Axios data here</button>
    <img :src="mydata.data.avatar" alt="avatar">
    <h1 v-if="mydata">{{ mydata.data.first_name + " " + mydata.data.last_name }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data(){
return{
 mydata:null,
}
},
methods:{
 async calldata(){
 this.mydata = await axios.get("https://random-data-api.com/api/v2/users");

}
}
}
</script>

<style>

</style>