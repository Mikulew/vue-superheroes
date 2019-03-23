<template>
  <header class="row">
    <img class="super-heroes" alt="superheroes image" src="../assets/super-heroes.jpg">

    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.super-heroes {
  width: auto;
  height: 200px;
}
</style>
