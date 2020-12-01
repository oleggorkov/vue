<template>
  <div class="catalogue">
    <product-card
    v-for="product in products"
    :key="product.article"
    v-bind:product_data="product"
    @sendDataToParent="showArticleChild"
    />
  </div>
</template>

<script>

import search from '../components/search';
import ListMenu from "../components/list-menu";
import logo from "../components/logo";
import ProductCard from "./product-card";
import {mapActions, mapGetters} from 'vuex'

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
          available: true
        },
        {
          image: "last_supper.png",
          name: "«Тайная вечеря»  Леонардо да Винчи",
          price: "3 000 000 $",
          old_price: null,
          article: "№2",
          available: true
        },
        {
          image: "creation_of_adam.png",
          name: "«Сотворение Адама» Микеланджело",
          price: "5 000 000 $",
          old_price: "6 000 000 $",
          article: "№3",
          available: true
        },
        {
          image: "anatomy_lesson.png",
          name: "«Урок анатомии»  Рембрандт",
          price: null,
          old_price: null,
          article: "№4",
          available: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showArticleChild(data) {
      console.log(data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
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
