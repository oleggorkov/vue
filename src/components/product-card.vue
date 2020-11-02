<template>
  <div
    class="product-card"
    v-bind:class="{'product-card__unavailable' : product_data.available === false}"
  >
    <a href="#" class="product-card__image">
      <img v-bind:src="require('../assets/images/pictures/' + product_data.image)" alt="picture">
    </a>
    <div class="product-card__footer">
      <div class="product-card__footer-name">{{ product_data.name }}</div>
      <div
        class="product-card__footer-info"
        v-if="product_data.available === true"
      >
        <div class="product-card__footer-price">
          <div
            class="product-card__footer-price-old-none"
            v-if="product_data.old_price == null"
          >{{ product_data.old_price }}
          </div>
          <div
            class="product-card__footer-price-old"
            v-else
          >{{ product_data.old_price }}
          </div>
          <div class="product-card__footer-price-present">{{ product_data.price }}</div>
        </div>
        <btn />
      </div>
      <div
        class="product-card__footer-info-unavailable"
        v-else
      >Продана на аукционе
      </div>
    </div>
  </div>
</template>

<script>



import Btn from "./btn";
export default {

  name: "product-card",
  props: {
    product_data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Btn

  },
  data() {
    return {}
  },
}

</script>

<style lang="scss">

@import "src/assets/styles/vars/colors";

.product-card {
  height: auto;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-decoration: none;

  margin-bottom: 40px;

  &:not(:last-of-type) {
    margin-right: 32px;
  }

  &__unavailable {
    opacity: 0.5;
  }

  &__image {
    width: 100%;
    height: 160px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 160px;

      object-fit: contain;
    }
  }

  &__footer {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 22px 24px 26px 24px;

    &-name {
      width: 100%;
      height: auto;

      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0;
      text-align: left;
      color: $brown-main;
    }

    &-info {
      width: 100%;
      height: auto;

      display: flex;
      justify-content: space-between;

      margin-top: 23px;

      &-unavailable {
        width: 100%;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0;
        text-align: left;


        margin-top: 23px;
      }
    }

    &-price {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      &-old {
        font-size: 14px;
        font-weight: 300;
        line-height: 21px;
        letter-spacing: 0;
        text-align: left;
        text-decoration-line: line-through;
        color: $gray-helper;

        &-none {
          display: none;
        }

      }

      &-present {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0;
        text-align: left;
        color: $brown-main;

      }
    }

  }
}


</style>
