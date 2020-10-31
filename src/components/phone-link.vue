<template>
  <a href="tel:+74955555555" class="phone">
    <i class="material-icons">face</i>
    <span>+7 (495) 555-55-55</span>
  </a>
</template>

<script>
export default {
  name: "phone-link",
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

  cursor: pointer;

  transition: color .25s;

  &:hover {
    color: $brown-light;
    text-decoration: underline;
  }
}
</style>
