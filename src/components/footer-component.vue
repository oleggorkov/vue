<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <logo />
      <list-menu />
      <phone-link />
    </div>
  </footer>
</template>

<script>

import ListMenu from "../components/list-menu";
import Logo from "./logo";
import PhoneLink from "./phone-link";

export default {

  name: "footer-component",
  components: {
    PhoneLink,
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

  background: $white-main;

  & .list-menu {
    margin-right: 153px;
    margin-left: 48px;
  }

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

}

</style>
