<template>
  <div class="search">
    <div class="search__block">
      <input placeholder="Поиск по названию картины" type="text" class="search__block-input">
    </div>
    <btn />
  </div>
</template>

<script>

  import btn from '../components/btn'

  export default {
    name: "search",
    components: {
      btn
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">

@import "src/assets/styles/vars/colors";

.search {
  width: auto;
  height: 48px;

  display: flex;
  justify-content: flex-start;

  &__block {
    width: 294px;
    height: auto;

    &-input {
      width: 100%;
      height: auto;

      padding: 12px 16px 13px 16px;

      border: 1px solid $gray-light;

      text-align: left;
      color: $brown-main;

      &::placeholder {
        color: $gray-main;
      }

    }
  }
}

</style>
