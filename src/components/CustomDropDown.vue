<template>
  <div>
    <label>{{title}}:</label>
    <select class="form-control" v-model="selectItem" @change="selectedItem">
      <option v-for="(item, index) in list" :key="index">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomDropDown",
  props: ["list", "title"],
  data() {
    return {
      selectItem: ""
    };
  },
  created() {
    this.$root.$on("clear-filter", () => {
      this.selectItem = "";
    });
  },
  methods: {
    selectedItem() {
      this.$emit("change-drop-down-item", this.selectItem);
    }
  }
};
</script>

<style lang="css" scoped>
label {
  width: 100%;
  text-align: start;
}
</style>