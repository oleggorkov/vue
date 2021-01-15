<template>
  <div class="catalogue">
    <product-card
    v-for="product in products"
    :key="product.article"
    v-bind:product_data="product"
    @addToCart="addToCart"
    />
  </div>
</template>

<script>

import search from '../components/search';
import ListMenu from "../components/list-menu";
import logo from "../components/logo";
import ProductCard from "./product-card";
import axios from "axios";

export default {

  name: "catalogue",
  components: {
    ProductCard,
    ListMenu,
    search,
    logo
  },
  data() {
    return {
      products: [
        {
          image: "birth_of_venus.png",
          name: "«Рождение Венеры» Сандро Боттичелли",
          price: "1 000 000 $",
          old_price: "2 000 000 $",
          article: "N1",
          available: true,
          title: 'Купить'
        },
        {
          image: "last_supper.png",
          name: "«Тайная вечеря»  Леонардо да Винчи",
          price: "3 000 000 $",
          old_price: null,
          article: "№2",
          available: true,
          title: 'Купить'
        },
        {
          image: "creation_of_adam.png",
          name: "«Сотворение Адама» Микеланджело",
          price: "5 000 000 $",
          old_price: "6 000 000 $",
          article: "№3",
          available: true,
          title: 'Купить'
        },
        {
          image: "anatomy_lesson.png",
          name: "«Урок анатомии»  Рембрандт",
          price: null,
          old_price: null,
          article: "№4",
          available: false,
          title: 'Купить'
        }
      ],
      cart: []
    }
  },
  computed: {
    CART() {
      return this.$store.getters.CART;
    }
  },
  methods: {
    async addToCart(product) {
      const promise = axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
          if (response.status === 200) {
            console.log('ok');
          }
        })
      product.title = 'Проверка'
      await promise
      this.cart.push(product);
      await this.$store.commit('addToCart', product);
      product.title = 'В корзине';
    }
  },
}

</script>

<style lang="scss">

@import "src/assets/styles/vars/colors";

.catalogue {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  margin-top: 39px;
}


</style>
