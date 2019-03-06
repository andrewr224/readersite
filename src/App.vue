<template>
  <div id="app">
    <Header />

    <nav>
      <router-link to="/">Books</router-link>
      <router-link to="/about">About us</router-link>
    </nav>

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");

/* color: #D62839 */
/* color: #BA324F */
/* color: #175676 */
/* color: #4BA3C3 */
/* color: #CCE6F4 */

body {
  background: #CCE6F4 ;
  margin: 0;
  height: 100%;
  padding-bottom: 66px;
}

a {
  text-decoration: none;
  color: #4BA3C3;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #175676;
  margin-top: 60px;
}

nav {
  padding: 20px 0 20px 15px;
}

nav a {
  padding: 10px;
  border-bottom: 3px solid #D62839 ;
  border-radius: 3px;
  color: #D62839 ;
  font-weight: bold;
  margin-right: 15px;
  font-size: 25px;
}
</style>
