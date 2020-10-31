<template>
  <header class="header">
    <div class="header__wrapper">
      <logo />
      <list-menu />
      <search />
    </div>
  </header>
</template>

<script>

import search from '../components/search';
import ListMenu from "../components/list-menu";
import logo from "../components/logo";

export default {

  name: "header-component",
  components: {
    ListMenu,
    search,
    logo
  },
  data() {
    return {}
  }
}

</script>

<style lang="scss">

@import "src/assets/styles/vars/colors";

.header {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;

  border-bottom: 1px solid $gray-light;

  &__wrapper {
    width: auto;
    height: 96px;

    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .list-menu {
    margin-right: 185px;
    margin-left: 48px;
  }
}

</style>
