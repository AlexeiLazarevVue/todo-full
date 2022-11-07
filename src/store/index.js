import { createStore } from "vuex";
import { deskStoreModule } from "@/store/deskStoreModule";
import { inputsController } from "@/store/inputsController";

export default createStore({
  modules: {
    deskStoreModule,
    inputsController
  },
});
