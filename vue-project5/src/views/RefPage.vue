<template>
  <div>
    <button @click="showData">Click Here</button>
    <h1 ref="h1content"></h1>
  </div>
  <hr>
  <div>
    <p ref="p1con">
        Today is first Sunday of this year
    </p>
    <button @click="copyPaste">Click Here </button>
    <h1 ref="h1c">........</h1>
  </div>
  <div>
    <form action="">
        <input ref="inp1" @input="inputShow" placeholder="Write here....">
    </form>
    <h1 ref="val1"></h1>
  </div>
</template>

<script>
export default {
    methods: {
      showData(){
        this.$refs.h1content.innerHTML = "Hello, world!";
      },
      copyPaste(){
        this.$refs.h1c.innerHTML = this.$refs.p1con.innerHTML
      },
      inputShow(){
        this.$refs.val1.innerHTML = this.$refs.inp1.value
      }
    }
}
</script>

<style>

</style>