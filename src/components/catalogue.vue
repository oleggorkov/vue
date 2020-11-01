<template>
  <div class="catalogue">
    <product-card
    v-for="product in PRODUCTS"
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
