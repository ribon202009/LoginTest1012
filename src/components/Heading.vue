<template>

<div id="heading">
  <h1>{{ heading }}</h1>
</div>

</template>
 
<style>
#heading{
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  color: aqua;
}
</style>
 
<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'No Heading',
      required: true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
