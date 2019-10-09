<template>
  <div class="col-sm-3 px-2">
    <div class="card text-center border-1 shadow-sm mb-3 bg-white rounded-lg card-pointer">
      <div @click="description(isDescription)">
        <img class="card-img-top" :src="item.img" />
        <div class="card-body p-1 m-1">
          <h5 class="card-title mb-0">{{item.name}}</h5>
          <div class="card-text">
            <div>
              <small class="card-text text-muted">{{item.category}}</small>
            </div>
            <div>
              <del class="px-1">{{item.oldPrice}}</del>
              <strong>{{item.price}} ₽</strong>
            </div>
          </div>
          <div
            class="alert alert-dark p-0 mb-1"
            role="alert"
            :style="{display: isDescription ? 'block' : 'none'}"
          >
            <div>
              <small>
                <strong>Бренд</strong>
                {{item.brand}}
              </small>
            </div>
            <div>
              <small>
                <strong>Размер</strong>
                {{item.size}}
              </small>
            </div>
            <div>
              <small>
                <strong>Цвет</strong>
                {{item.color}}
              </small>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="showAlert">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  data() {
    return {
      isDescription: false
    };
  },
  methods: {
    description(desc) {
      this.isDescription = !desc;
    },
    showAlert() {
      const options = { title: "Информация о покупке", size: "sm" };
      this.$dialogs.alert(`Вы купили товар ${this.item.name}`, options);
    }
  }
};
</script>

<style scoped>
.card-pointer {
  cursor: pointer;
}
</style>