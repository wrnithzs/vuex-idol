<template>
  <div>
<nav>
  <div class="nav nav-tabs justify-content-center navbar-dark bg-warning" id="nav-tab" role="tablist">
    <router-link :to="{ name: 'Home' }" class="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</router-link>
    <router-link :to="{ name: 'CreateEvent' }" class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">CreateEvent</router-link>
    <router-link :to="{ name: 'Artist' }" class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Artist</router-link>
  </div>
</nav>
    <router-view />
  </div>

</template>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* #nav {
  padding: 30px;
} */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983; */
/* } */
</style>
