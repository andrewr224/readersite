<template>
<footer>
  <p>
    <small>
      Created by <a href="https://github.com/andrewr224" target="blank">Andrew Rozhenko</a>
    </small>
  </p>
</footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #D62839;
  color: #FFF;
  text-align: center;
}

footer a {
  color: #FFF;
}
</style>
