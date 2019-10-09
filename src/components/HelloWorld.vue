<template>
  <div class="container-fluid">
    <h1>Список товаров</h1>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Фильтры</h5>
            <div class="card-text">
              <form>
                <div class="form-group">
                  <drop-down
                    @change-drop-down-item="changeItem({brand: $event})"
                    :title="'Бренд'"
                    :list="listBrand"
                  />
                </div>
                <div class="form-group">
                  <drop-down
                    @change-drop-down-item="changeItem({size: $event})"
                    :title="'Размеры'"
                    :list="listSize"
                  />
                </div>
                <div class="form-group">
                  <drop-down
                    @change-drop-down-item="changeItem({color: $event})"
                    :title="'Цвета'"
                    :list="listColors"
                  />
                </div>
                <div class="text-right">
                  <button
                    type="button"
                    class="btn btn-primary"
                    :disabled="isDisabled"
                    @click="clearFilter"
                  >Сбросить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-light" role="alert">Найдено {{listProducts.length}} товара</div>
    <list-item :products="listProducts" />
  </div>
</template>

<script>
import CustomDropDown from "./CustomDropDown.vue";
import ListItem from "./ListItem.vue";
import products from "../assets/content";

export default {
  name: "HelloWorld",
  components: {
    "drop-down": CustomDropDown,
    "list-item": ListItem
  },
  data() {
    return {
      listBrand: ["Super", "Puper", "Cool", "Like"],
      listSize: [29, 31, 35, 37, 42],
      listColors: ["Синий", "Красный", "Зеленый", "Белый", "Серый"],
      listProducts: products,
      filterValue: {}
    };
  },
  methods: {
    changeItem(item) {
      this.filterValue = { ...this.filterValue, ...item };
      this.filter();
    },
    filter() {
      const data = products.filter(product => {
        const arrayKeys = Object.keys(this.filterValue);
        let counter = 0;
        const isFilter = arrayKeys.some(item => {
          const value = this.filterValue[item];
          const value1 = product[item];
          if (value === value1) {
            counter++;
          }
          if (counter === arrayKeys.length) return true;
        });
        return isFilter;
      });
      this.listProducts = data;
    },
    clearFilter() {
      this.filterValue = {};
      this.$root.$emit("clear-filter");
      this.listProducts = products;
    }
  },
  computed: {
    isDisabled: function() {
      if (
        this.filterValue.brand ||
        this.filterValue.size ||
        this.filterValue.color
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
