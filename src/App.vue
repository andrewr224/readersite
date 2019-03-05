<template>
  <div id="app">
    <nav>
      <router-link to="/">list</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import List from "./components/List"

export default {
  name: "app",
  components: {
    List
  }
}
</script>

<style>
/* color: #D62839 */
/* color: #BA324F */
/* color: #175676 */
/* color: #4BA3C3 */
/* color: #CCE6F4 */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #CCE6F4 ;
  margin-top: 60px;
}
</style>
