<template>
  <button
    class="button"
    @click="sendDataToParent"
  >
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
      },
      product_data: {
        type: Object,
        default() {
          return{}
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      sendDataToParent() {
        this.$emit('sendDataToParent', this.product_data.article)
      }
    }
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0;

  padding: 13px 30px;

  transition: background .25s;

  &:hover {
    background: $brown-light;
  }
}
</style>
