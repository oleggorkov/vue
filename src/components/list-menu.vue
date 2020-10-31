<template>
  <ul class="list-menu">
    <li class="list-menu__item">
      <a href="#">Каталог</a>
    </li>
    <li class="list-menu__item">
      <a href="#">Доставка</a>
    </li>
    <li class="list-menu__item">
      <a href="#">Оплата</a>
    </li>
    <li class="list-menu__item">
      <a href="#">Контакты</a>
    </li>
    <li class="list-menu__item">
      <a href="#">О галерее</a>
    </li>
  </ul>
</template>

<script>

export default {
  name: "list-menu",
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss">

@import "src/assets/styles/vars/colors";

.list-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__item {

    &:not(:last-of-type) {
      margin-right: 48px;
    }

    a {
      display: block;

      text-decoration: none;
      color: $brown-main;
      white-space: nowrap;

      transition: color 0.25s;

      &:hover {
        color: $brown-light;
        text-decoration: underline;
      }
    }
  }
}

</style>
