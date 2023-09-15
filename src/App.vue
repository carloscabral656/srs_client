<template>
  <LoginView/>
  <Toast />
</template>

<style>
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
}
</style>

<script>
import LoginView from './views/LoginView.vue'
import Toast from './components/globals/Toast.vue';

export default {
  name: 'App',
  components: {
    LoginView,
    Toast
  }
}
</script>

<style>
</style>
