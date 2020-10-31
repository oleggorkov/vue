<template>
  <div id="app">
    <header-component />
    <main class="main"></main>
    <footer-component />
  </div>
</template>

<script>

import HeaderComponent from './components/header-component';
import FooterComponent from './components/footer-component';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>

<style>


</style>
