<template>
  <a href="#" class="map">
    <icon icon-name="map"><icon-map /></icon>
    г. Москва, ул. Расплетина, 24
  </a>
</template>

<script>

import icon from "./icon";
import IconMap from "./icons/IconMap";

export default {
  name: "map-link",
  components: {
    IconMap,
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

.map {
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
