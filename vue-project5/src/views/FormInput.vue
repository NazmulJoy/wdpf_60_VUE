<template>
    <h1>Registraion Form</h1>
    <div ref="infoShow" id="display">...</div>
    <div>{{ fullname }}</div>
    <div>{{ gender }}</div>
    <div>{{ district }}</div>
    <div>{{ language }}</div>
    <div>{{ address }}</div>
  <div>
    <form @submit.prevent="formSubmit">
        Name: &nbsp; <input type="text" v-model="fullname" name="fullname" id=""><br>
        Gender: &nbsp;
        Male<input type="radio" v-model="gender" name="gender" value="male">
        female<input type="radio" v-model="gender" name="gender" value="female"><br>
        District: &nbsp; <select name="district" v-model="district"  id="">
            <option disabled>Please select one</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Sylhet</option>
            <option>Cumilla</option>
            <option>Rangpur</option>
        </select><br>
        Language: &nbsp; <input type="checkbox" v-model="language" name="PHP" value="PHP">PHP
        <input type="checkbox" name="Javascript" v-model="language" value="javascript">Javascript
        <input type="checkbox" name="React" v-model="language" value="react">React
        <input type="checkbox" name="Laravel" v-model="language" value="laravel">Laravel
        <input type="checkbox" name="Vue" v-model="language" value="vue">Vue <br>
        Address: &nbsp;
        <textarea name="address" v-model="address" id=""></textarea> <br>

        <input type="submit" name="SUBMIT" value="submit">
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            fullname : "",
            gender: "",
            district: "",
            language: [],
            address: "",
            info: "",
        }
    },
    methods: {
        formSubmit(){
          this.info += "Fullname: " + this.fullname;
          this.info += "<br>Gender: " + this.gender;
          this.info += "<br>District: " + this.district;
          this.info += "<br>Language: " + this.language;
          this.info += "<br>Address: " + this.address;
            this.$refs.infoShow.innerHTML = this.info;

        }
    }
}
</script>

<style scope>
#display{
    background-color: aquamarine;
    
}
</style>