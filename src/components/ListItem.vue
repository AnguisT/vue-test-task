<template>
  <div class="row">
    <item v-for="product in products" :key="product.id" :item="product" />
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "ListItem",
  components: {
    item: Item
  },
  props: ["products"]
};
</script>