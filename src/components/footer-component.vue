<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__content">
        <logo />
        <list-menu />
      </div>
      <div class="footer__content">
        <phone-link />
        <map-link />
      </div>
    </div>
  </footer>
</template>

<script>

import ListMenu from "../components/list-menu";
import Logo from "./logo";
import PhoneLink from "./phone-link";
import MapLink from "./map-link";

export default {

  name: "footer-component",
  components: {
    PhoneLink,
    MapLink,
    Logo,
    ListMenu
  },
  data() {
    return {}
  }
}

</script>

<style lang="scss">

@import "src/assets/styles/vars/colors";

.footer {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  flex: 0 0 auto;

  background: $white-main;

  & .list-menu {
    margin-left: 48px;
  }

  & .map {
    margin-left: 51px;
  }

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

}

</style>
