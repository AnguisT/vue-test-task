import Vue from "vue";
import App from "./App.vue";
import "v-slim-dialog/dist/v-slim-dialog.css";
import SlimDialog from "v-slim-dialog";

Vue.config.productionTip = false;
Vue.use(SlimDialog);

new Vue({
  render: h => h(App)
}).$mount("#app");
