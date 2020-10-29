<template>
  <div id="app">
    <header class="header">
      <div class="header__wrapper">
        <div class="header__logo">
          <img src="./assets/images/logo.png" alt="logo">
        </div>
        <ul class="list-menu">
          <li class="list-menu__item">Каталог</li>
          <li class="list-menu__item">Доставка</li>
          <li class="list-menu__item">Оплата</li>
          <li class="list-menu__item">Контакты</li>
          <li class="list-menu__item">О галерее</li>
        </ul>
        <div class="header__block">
          <div class="header__search">
            <input type="text" class="header__search-input">
          </div>
          <btn />
        </div>
      </div>
    </header>
    <main class="main"></main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import btn from './components/btn'
export default {
  name: 'app',
  components: {
    btn
  },
}
</script>

<style>


</style>
