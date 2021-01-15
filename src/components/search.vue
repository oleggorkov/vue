<template>
  <div class="search">
    <div class="search__block">
      <input placeholder="Поиск по названию картины" type="text" class="search__block-input">
    </div>
    <button class="button">Найти
    </button>
  </div>
</template>

<script>

  export default {
    name: "search",
    components: {
    },
    data() {
      return {
      }
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
    height: 48px;

    &-input {
      width: 100%;
      height: 48px;

      padding: 12px 16px 13px 16px;

      border: 1px solid $gray-light;
      border-right: none;

      text-align: left;
      color: $brown-main;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0;

      &::placeholder {
        color: $gray-main;
      }

      &:-ms-input-placeholder {
        color: $gray-main!important;
      }

      &:focus {
        border: 1px solid $gray-dark;
      }

    }
  }
}

</style>
