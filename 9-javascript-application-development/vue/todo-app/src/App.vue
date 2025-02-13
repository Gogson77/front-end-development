<template>
  <div id="app-container"></div>
</template>

<script>

import

export default {
  name: 'App'
};
</script>

<style>
body {
  background: linear-gradient(45deg, #6e5771, #f74991);
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

#app-container {
  max-width: 490px;
  margin: 0 auto;
  height: 95vh;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translate(0, -50%);
  top: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
