<template>
  <div class="screen" id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  opacity: 1;
  background-color: #1c276f;
  animation: preload 4s linear;
  opacity: 1;
}

@keyframes preload {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.screen {
  color: black;
  font-family: "Questrial", sans-serif;
  background-color: #1c276f;
  background-image: linear-gradient(
      45deg,
      black 25%,
      transparent 25%,
      transparent 75%,
      black 75%,
      black
    ),
    linear-gradient(
      -45deg,
      black 25%,
      transparent 25%,
      transparent 75%,
      black 75%,
      black
    );
  background-size: 60px 60px;
  background-position: 0 0;
  animation: slide 4s infinite linear, fadein 3s;
}

@keyframes slide {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -120px 60px;
  }
}

#app {
  font-family: "Press Start 2P";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
