<template>
  <IndexView/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;1,600&display=swap');

body{
  margin: 0;
  padding: 0;
}

#app{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
}
</style>

<script>
import IndexView from './views/IndexView.vue'

export default {
  name: 'App',
  components: {
    IndexView
  }
}
</script>

<style>
</style>
