<template>
  <a href="tel:+74955555555" class="phone">
    <icon icon-name="phone"><icon-phone /></icon>
    +7 (495) 555-55-55
  </a>
</template>

<script>

import icon from "./icon";
import IconPhone from "./icons/IconPhone";

export default {
  name: "phone-link",
  components: {
    IconPhone,
    icon
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss">

@import "src/assets/styles/vars/colors";

.phone {
  display: flex;
  justify-content: center;
  align-items: center;

  color: $brown-main;
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0;

  cursor: pointer;

  transition: color .25s;

  &:hover {
    color: $brown-light;
  }
}
</style>
