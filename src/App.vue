<template>
  <div id="app">
  
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Portfolio</router-link> |
      <router-link to="#">Services</router-link> 
    </div>
    <transition name="fade">
    <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #616161;
 background-color:white ;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 1s;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
