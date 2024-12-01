<template>
  <img src="@/assets/logo.png" class="img-fluid" alt="aisatsu">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/lastYear">LastYear</router-link> |
    <router-link to="/game">Game</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-image: url(assets/shougatsu.png); 
}

nav {
  padding: 30px;
}

nav a {
  color: #d35400;
}
nav a.router-link-exact-active {
  color: #f39c12;
}

@media screen and (min-width:480px) {
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  font-size: 25px;
}

nav a {
  color: #d35400;
}
nav a.router-link-exact-active {
  color: #f39c12;
}
}

</style>