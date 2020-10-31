<template>
  <button class="button">
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "btn",
  props: {
    title: {
      type : String,
      default: 'Купить'
    }
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss">

@import "src/assets/styles/vars/colors";

.button {
  width: auto;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: $brown-main;
  color: $white;

  padding: 13px 30px;

  cursor: pointer;

  transition: background .25s;

  &:hover {
    background: $brown-light;
  }
}
</style>
