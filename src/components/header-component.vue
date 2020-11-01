<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__content">
        <logo />
        <list-menu />
      </div>
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
  flex: 0 0 auto;

  border-bottom: 1px solid $gray-light;

  &__content {
    display: flex;
  }

  &__wrapper {
    width: 100%;
    height: 96px;
    max-width: 1216px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .list-menu {
    margin-left: 48px;
  }
}

</style>
