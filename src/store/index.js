import { createStore } from "vuex";
import { deskStoreModule } from "@/store/deskStoreModule";

export default createStore({
  modules: {
    deskStoreModule,
  },
});
