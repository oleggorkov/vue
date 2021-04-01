<template>
  <div id="app">
    <header-component />
    <main class="main">
      <div class="main__wrapper">
        <h1 class="main__heading">Картины эпохи Возрождения</h1>
        <catalogue />
      </div>
    </main>
    <footer-component />
  </div>
</template>

<script>

import HeaderComponent from './components/header-component';
import FooterComponent from './components/footer-component';
import Catalogue from "./components/catalogue";

export default {
  name: 'app',
  components: {
    Catalogue,
    HeaderComponent,
    FooterComponent
  },
}
</script>

<style lang="scss">

#app {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.main {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  flex: 1 0 auto;

  padding: 45px 0 277px 0;

  &__wrapper {
    width: 100%;
    height: auto;
    max-width: 1216px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  &__heading {
    width: 100%;
    height: auto;

    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0;
    text-align: left;
  }
}


</style>
