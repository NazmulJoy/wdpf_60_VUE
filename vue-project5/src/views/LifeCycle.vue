<template>
    <h2>Component</h2>
    <p>This is the component</p>
    <p id="pResult">{{ text1 }}</p>
    <p id="pResult">{{ text2 }}</p>
</template>

<script>
export default {
	data() {
		return {
			text1: '...',
            text1: '...'
		}
	},
  beforeCreate() {
		this.text1 = 'initial text'; 
    console.log("beforeCreate: The component is not created yet.");
  },
  created() {
		this.text2 = 'After created initial text';
    console.log("created: The component just got created.");
  }
}
</script>