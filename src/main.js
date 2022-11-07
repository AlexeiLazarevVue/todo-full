import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import store from "@/store/index";
import components from "@/components/UI";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

library.add(faTrash)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router).mount("#app");
